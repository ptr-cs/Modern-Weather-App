using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZenoWeatherApp.Model;

public struct Temperature
{
    public double Value
    {
        get;set;
    }

    public string Unit
    {
        get;set;
    }
}

public struct Temperatures
{
    public Temperature Maximum
    {
        get; set;
    }

    public Temperature Minimum
    {
        get; set;
    }
}

//public struct Precipitation
//{
//    public string Type
//    {
//        get;set;
//    }
//    public string Intensity
//    {
//        get;set;
//    }
//}

public struct DailyForecastPortion
{
    public int Icon
    {
        get;set;
    }

    public string IconPhrase
    {
        get;set;
    }

    public bool HasPrecipitation
    {
        get;set;
    }

    public string PrecipitationType
    {
        get; set;
    }
    public string PrecipitationIntensity
    {
        get; set;
    }
}

public class DailyForecast
{
    public DateTime Date
    {
        get;set;
    }

    public Temperatures Temperature
    {
        get; set;
    }

    public DailyForecastPortion Day
    {
        get;set;
    }

    public DailyForecastPortion Night
    {
        get; set;
    }

    public string? MobileLink
    {
        get;set;
    }
}
