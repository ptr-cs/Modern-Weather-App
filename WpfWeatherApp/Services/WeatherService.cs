using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Reflection.Metadata;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using WpfWeatherApp;
using ZenoWeatherApp.Model;

namespace ZenoWeatherApp.Services;

public class WeatherService : IWeatherService
{
    public async Task <Forecast?> GetForecastAsync(string locationKey, string apiKey) {
        HttpClient client = new HttpClient();
        HttpResponseMessage response =
            await client.GetAsync($"http://dataservice.accuweather.com/forecasts/v1/daily/5day/{locationKey}?apikey={apiKey}");     
        if (response.IsSuccessStatusCode)
        {
            Debug.WriteLine(response);
            var stringResult = await response.Content.ReadAsStringAsync();
            Debug.WriteLine(stringResult);
            try
            {
                var deserialized = JsonSerializer.Deserialize<Forecast>(stringResult, new JsonSerializerOptions());
                if (deserialized != null)
                {
                    return deserialized;
                }
            }
            catch (Exception e) { Debug.WriteLine($"Ex: {e} {e.Message}"); }
        }
        return null;
    }

    public async Task<Location?> GetLocationAsync(string query, string apiKey) {
        HttpClient client = new HttpClient();
        // client.DefaultRequestHeaders.Add("Accept-Encoding", "gzip,deflate");
        HttpResponseMessage response =
            await client.GetAsync($"http://dataservice.accuweather.com/locations/v1/search?apikey={apiKey}&q={query}");
        if (response.IsSuccessStatusCode)
        {
            Debug.WriteLine(response);
            var stringResult = await response.Content.ReadAsStringAsync();
            Debug.WriteLine(stringResult);
            try
            {
                var deserialized = JsonSerializer.Deserialize<IEnumerable<Location>>(stringResult);
                if (deserialized != null && deserialized.Any())
                {
                    return deserialized.First();
                }
            }
            catch (Exception e) { Debug.WriteLine($"Ex: {e} {e.Message}"); }
        }
        return null;
    }
}
