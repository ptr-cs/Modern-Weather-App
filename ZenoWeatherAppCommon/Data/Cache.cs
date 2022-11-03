using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ZenoWeatherApp.Model;
using TimeZone = ZenoWeatherApp.Model.TimeZone;

namespace ZenoWeatherAppCommon.Data;

public static class WeatherDataCacher
{
    static WeatherDataCacher()
    {
    }

    public static void GenerateRandom()
    {
        
    }

    /// <summary>
    /// For processing lists of JSON response strings from API requests
    /// </summary>
    /// <param name="locations"></param>
    /// <param name="conditions"></param>
    /// <param name="forecasts"></param>
    public static void AddPreExisting(List<string> locations, List<string> conditions, List<string> forecasts)
    {
        foreach (var loc in locations)
        {
            try
            {
                var deserialized = JsonSerializer.Deserialize<IEnumerable<Location>>(loc);
                if (deserialized != null && deserialized.Any())
                {
                    CacheLocation(deserialized.First());
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine($"Ex: {e} {e.Message}");
            }
        }

        foreach (var condition in conditions)
        {
            try
            {
                var deserialized = JsonSerializer.Deserialize<IEnumerable<CurrentConditions>>(condition, new JsonSerializerOptions());
                if (deserialized != null && deserialized.Any())
                {
                    CacheCurrentConditions(deserialized.First());
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine($"Ex: {e} {e.Message}");
            }
        }

        foreach (var forecast in forecasts)
        {
            try
            {
                var deserialized = JsonSerializer.Deserialize<Forecast>(forecast, new JsonSerializerOptions());
                if (deserialized != null)
                {
                    CacheForecast(deserialized);
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine($"Ex: {e} {e.Message}");
            }
        }
    }

    /// <summary>
    /// Store a location into the cache database
    /// </summary>
    /// <param name="location"></param>
    public static void CacheLocation(Location location)
    {
        using var db = new WeatherContext();

        if (!db.Locations.Any(x => x.EnglishName == location.EnglishName))
        {
            Debug.WriteLine($"Inserting a new location: {location.EnglishName}");
            if (db.Countries.Contains(location.Country))
                db.Countries.Attach(location.Country);
            if (db.AdministrativeAreas.Contains(location.AdministrativeArea))
                db.AdministrativeAreas.Attach(location.AdministrativeArea);
            if (db.TimeZones.Contains(location.TimeZone))
                db.TimeZones.Attach(location.TimeZone);

            location.Key = Guid.NewGuid().ToString();

            db.Add(location);
            db.SaveChanges();
        }
    }

    /// <summary>
    /// Store a CurrentConditions entity into the cache database
    /// </summary>
    /// <param name="currentConditions"></param>
    public static void CacheCurrentConditions(CurrentConditions currentConditions)
    {
        using var db = new WeatherContext();

        if (!db.CurrentConditions.Any(x => x.CurrentConditionsId == currentConditions.CurrentConditionsId))
        {
            Debug.WriteLine($"Inserting new current conditions: {currentConditions.WeatherText}");
            db.Add(currentConditions);
            db.SaveChanges();
        }
    }

    /// <summary>
    /// Store a Forecast into the cache database
    /// </summary>
    /// <param name="forecast"></param>
    public static void CacheForecast(Forecast forecast)
    {
        using var db = new WeatherContext();

        if (!db.Forecasts.Any(x => x.ForecastId == forecast.ForecastId))
        {
            Debug.WriteLine($"Inserting new forecast: {forecast.ForecastId}");
            db.Add(forecast);
            db.SaveChanges();
        }
    }

    /// <summary>
    /// Get cached location from database
    /// </summary>
    /// <returns></returns>
    public static async Task<Location> GetLocationAsync()
    {
        using var db = new WeatherContext();
        Random rand = new Random();
        var locations = await db.Locations.Include(x => x.Country).Include(x => x.AdministrativeArea).ToAsyncEnumerable().OrderBy(x => x.Key).ToListAsync();
        return locations.ElementAt(rand.Next(0, locations.Count));
    }

    /// <summary>
    /// Get cached CurrentConditions entity from database
    /// </summary>
    /// <returns></returns>
    public static async Task<CurrentConditions> GetCurrentConditionsAsync()
    {
        using var db = new WeatherContext();
        Random rand = new Random();
        var currentConditions = await db.CurrentConditions.ToAsyncEnumerable().OrderBy(x => x.CurrentConditionsId).ToListAsync();
        return currentConditions.ElementAt(rand.Next(0, currentConditions.Count));
    }

    /// <summary>
    /// Get cached Forecast entity from database
    /// </summary>
    /// <returns></returns>
    public static async Task<Forecast> GetForecastAsync()
    {
        using var db = new WeatherContext();
        Random rand = new Random();
        var forecast = await db.Forecasts.Include(x => x.DailyForecasts).ToAsyncEnumerable().OrderBy(x => x.ForecastId).ToListAsync();
        return forecast.ElementAt(rand.Next(0, forecast.Count));
    }
}

public class WeatherContext : DbContext
{
    public DbSet<Location> Locations
    {
        get; set;
    }
    public DbSet<Country> Countries
    {
        get; set;
    }
    public DbSet<AdministrativeArea> AdministrativeAreas
    {
        get; set;
    }
    public DbSet<TimeZone> TimeZones
    {
        get; set;
    }

    public DbSet<CurrentConditions> CurrentConditions
    {
        get;set;
    }

    public DbSet<Forecast> Forecasts
    {
        get; set;
    }

    public string DbPath
    {
        get;
    }

    public WeatherContext()
    {
        // var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = $"{AppDomain.CurrentDomain.BaseDirectory}Data"; //Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "weatherContext.db");
    }

    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}