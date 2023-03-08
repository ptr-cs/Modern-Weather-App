using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ZenoWeatherApp.Model;
using ZenoWeatherApp.Services;

namespace ZenoWeatherAppWeb.Pages;
public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;
    private readonly IWeatherService _weatherService;

    public CurrentConditions? CurrentConditions
    {
        get;set;
    }

    public IndexModel(ILogger<IndexModel> logger, IWeatherService weatherService)
    {
        _logger = logger;
        _weatherService = weatherService;
    }

    public async void OnGet()
    {
        string locationKey = "";
        string apiKey = "";
        var result = await _weatherService.GetCurrentConditionsAsync(locationKey, apiKey);
        if (result != null) 
        {
            CurrentConditions = result;
        }
    }
}
