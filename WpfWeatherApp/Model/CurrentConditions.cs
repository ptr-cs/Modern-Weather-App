using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZenoWeatherApp.Model;

public struct TemperatureSystem
{
    public Temperature Metric
    {
        get; set;
    }

    public Temperature Imperial
    {
        get; set;
    }
}

public struct WindSpeed
{
    public double Value
    {
        get; set;
    }

    public string Unit
    {
        get; set;
    }
}

public struct WindDirection
{
    public int Degrees
    {
        get; set;
    }

    public string Localized
    {
        get; set;
    }

    public string English
    {
        get; set;
    }
}

public struct WindSpeedSystem
{
    public WindSpeed Metric
    {
        get; set;
    }

    public WindSpeed Imperial
    {
        get; set;
    }
}

public struct Wind
{
    public WindSpeedSystem Speed
    {
        get;set;
    }

    public WindDirection Direction
    {
        get; set;
    }
}

public class CurrentConditions
{
    public string WeatherText
    {
        get;set;
    }

    public int WeatherIcon
    {
        get;set;
    }

    public DateTime LocalObservationDateTime
    {
        get; set;
    }

    public bool IsDayTime
    {
        get; set;
    }

    public TemperatureSystem Temperature
    {
        get; set;
    }

    public int RelativeHumidity
    {
        get; set;
    }

    public int UVIndex
    {
        get; set;
    }

    public Wind Wind
    {
        get; set;
    }

    public bool HasPrecipitation
    {
        get; set;
    }

    public string PrecipitationType
    {
        get; set;
    }
}
