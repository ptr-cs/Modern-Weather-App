using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ZenoWeatherAppWeb.Models;
using System.Web;


namespace ZenoWeatherAppWeb.Controllers;
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private string ApiKey { get; set; } = "";
    private string WeatherSearch { get; set; } = "";

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
        if (HttpContext != null)
        {
            if (HttpContext.Session.TryGetValue("ApiKey", out _))
                ApiKey = HttpContext.Session.GetString("ApiKey");

            if (HttpContext.Session.TryGetValue("WeatherSearch", out _))
                WeatherSearch = HttpContext.Session.GetString("WeatherSearch");
        }
        //WeatherSearch = HttpContext.Session.GetString("WeatherSearch");
    }

    public IActionResult Index()
    {
        Debug.WriteLine("apiKeyString: " + HttpContext.Session.GetString("ApiKey"));
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult Settings()
    {
        return View();
    }

    [HttpGet]
    public JsonResult GetApiKey()
    {
        return Json(HttpContext.Session.GetString("ApiKey"));
    }

    [HttpGet]
    public JsonResult GetWeatherSearch()
    {
        return Json(HttpContext.Session.GetString("WeatherSearch"));
    }

    [HttpPost]
    public void SetApiKey(string keyString)
    {

        ApiKey = keyString;

        if (keyString != null)
            HttpContext.Session.SetString("ApiKey", ApiKey);

        Debug.WriteLine("apiKeyString: " + ApiKey);
    }

    [HttpPost]
    public void SearchWeather(string weatherSearch)
    {
        WeatherSearch = weatherSearch;

        if (weatherSearch != null)
            HttpContext.Session.SetString("WeatherSearch", WeatherSearch);

        Debug.WriteLine("weatherSearch: " + WeatherSearch);
    }

    public IActionResult About()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
