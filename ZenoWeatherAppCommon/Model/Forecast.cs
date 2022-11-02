using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ZenoWeatherApp.Model;

public enum WeatherSeverity
{
    Unknown = 0,
    Significant = 1,
    Major = 2,
    Moderate = 3,
    Minor = 4,
    Minimal = 5,
    Insignificant = 6,
    Informational = 7
}

[Owned]
public class ForecastSummary
{
    public DateTime EffectiveDate
    {
        get;set;
    }

    public WeatherSeverity Severity
    {
        get;set;
    }

    public string? Text
    {
        get;set;
    }

    public string? Category
    {
        get;set;
    }
}

public class Forecast
{
    public int ForecastId
    {
        get; set;
    }

    public ForecastSummary? Headline
    {
        get;set;
    }

    public List<DailyForecast>? DailyForecasts 
    { 
        get; set; 
    }
}
