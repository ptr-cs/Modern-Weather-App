using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using ZenoWeatherApp.Model;
using ZenoWeatherApp.Services;
using ZenoWeatherAppCommon.Data;

namespace ZenoWeatherApp.Services;
public class DemoWeatherService : IWeatherService
{
    public int randIndex { get; set; } = 0;
    Random rand = new Random();

    public async Task<CurrentConditions?> GetCurrentConditionsAsync(string locationKey, string apiKey)
    {
        HttpClient client = new HttpClient();
        HttpResponseMessage response = new HttpResponseMessage() { StatusCode = System.Net.HttpStatusCode.OK };
        if (response.IsSuccessStatusCode)
        {
            var result = await WeatherDataCacher.GetCurrentConditionsAsync();
            return result;

            // return GetFakeCurrentConditions(FakeData.FakeCurrentConditions);
        }
        return null;
    }

    public async Task<Forecast?> GetForecastAsync(string locationKey, string apiKey, bool metric = false)
    {
        HttpClient client = new HttpClient();
        HttpResponseMessage response = new HttpResponseMessage();
        response.StatusCode = (apiKey == "") ? System.Net.HttpStatusCode.BadRequest : System.Net.HttpStatusCode.OK;
        if (response.IsSuccessStatusCode)
        {
            var result = await WeatherDataCacher.GetForecastAsync();
            return result;

            // return GetFakeForecast(FakeData.FakeForecasts);
        }
        return null;
    }

    public async Task<LocationResult> GetLocationAsync(string query, string apiKey)
    {
        HttpClient client = new HttpClient();
        Location? location = null;
        bool? parsingResult = null;
        HttpResponseMessage response = new HttpResponseMessage() { StatusCode = System.Net.HttpStatusCode.OK };
        if (response.IsSuccessStatusCode)
        {
            // await Task.Delay(500); // simulate query time-delay
            location = await WeatherDataCacher.GetLocationAsync();

            //location = GetFakeLocation(FakeData.FakeLocations);
        }
        return new LocationResult()
        {
            Location = location,
            StatusCode = response.StatusCode,
            ReasonPhrase = response.ReasonPhrase,
            ParsingResult = parsingResult
        };
    }

    public Location? ParseLocationJson(string stringResult)
    {
        var deserialized = JsonSerializer.Deserialize<IEnumerable<Location>>(stringResult);
        if (deserialized != null && deserialized.Any())
        {
            return deserialized.First();
        }
        return null;
    }

    public Forecast? ParseForecastJson(string stringResult)
    {
        var deserialized = JsonSerializer.Deserialize<Forecast>(stringResult, new JsonSerializerOptions());
        if (deserialized != null)
        {
            return deserialized;
        }
        return null;
    }

    public CurrentConditions? ParseCurrentConditionsJson(string stringResult)
    {
        var deserialized = JsonSerializer.Deserialize<IEnumerable<CurrentConditions>>(stringResult, new JsonSerializerOptions());
        if (deserialized != null && deserialized.Any())
        {
            return deserialized.First();
        }
        return null;
    }

    public CurrentConditions? GetFakeCurrentConditions(List<string> data)
    {
        randIndex = rand.Next(0, data.Count);
        var stringResult = data.ElementAt(randIndex);
        Debug.WriteLine(stringResult);
        try
        {
            return ParseCurrentConditionsJson(stringResult);
        }
        catch (Exception e)
        {
            Debug.WriteLine($"Ex: {e} {e.Message}");
        }
        return null;
    }

    public Forecast? GetFakeForecast(List<string> data)
    {
        randIndex = rand.Next(0, data.Count);
        var stringResult = data.ElementAt(randIndex);
        Debug.WriteLine(stringResult);
        try
        {
            return ParseForecastJson(stringResult);
        }
        catch (Exception e)
        {
            Debug.WriteLine($"Ex: {e} {e.Message}");
        }
        return null;
    }

    public Location? GetFakeLocation(List<string> data)
    {
        randIndex = rand.Next(0, data.Count);
        var stringResult = data.ElementAt(randIndex);
        Debug.WriteLine(stringResult);
        try
        {
            return ParseLocationJson(stringResult);
        }
        catch (Exception e)
        {
            Debug.WriteLine($"Ex: {e} {e.Message}");
        }
        return null;
    }
}
