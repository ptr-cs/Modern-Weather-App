using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ZenoWeatherApp.Model;

[Owned]
public class Temperature
{
    public double Value
    {
        get;set;
    }

    public string? Unit
    {
        get;set;
    }
}

[Owned]
public class Temperatures
{
    public int TemperaturesId
    {
        get; set;
    }

    public Temperature? Maximum
    {
        get; set;
    }

    public Temperature? Minimum
    {
        get; set;
    }
}

[Owned]
public class DailyForecastPortion
{
    public int Icon
    {
        get;set;
    }

    public string? IconPhrase
    {
        get;set;
    }

    public bool HasPrecipitation
    {
        get;set;
    }

    public string? PrecipitationType
    {
        get; set;
    }

    public string? PrecipitationIntensity
    {
        get; set;
    }
}

public class DailyForecast
{
    public int DailyForecastId
    {
        get; set;
    }

    public DateTime Date
    {
        get;set;
    }

    public Temperatures? Temperature
    {
        get; set;
    }

    public DailyForecastPortion? Day
    {
        get;set;
    }

    public DailyForecastPortion? Night
    {
        get; set;
    }
}
