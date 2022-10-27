using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZenoWeatherApp.Model;
using static ZenoWeatherApp.Services.WeatherService;

namespace ZenoWeatherApp.Services;

public interface IWeatherService
{
    public Task<LocationResult> GetLocationAsync(string query, string apiKey);
    public Task<Forecast?> GetForecastAsync(string locationKey, string apiKey);
    public Task<CurrentConditions?> GetCurrentConditionsAsync(string locationKey, string apiKey);
}
