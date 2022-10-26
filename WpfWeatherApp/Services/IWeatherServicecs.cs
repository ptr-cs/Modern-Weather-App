using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZenoWeatherApp.Model;

namespace ZenoWeatherApp.Services;

public interface IWeatherService
{
    public Task<Location?> GetLocationAsync(string query, string apiKey);
    public Task<Forecast?> GetForecastAsync(string locationKey, string apiKey);
}
