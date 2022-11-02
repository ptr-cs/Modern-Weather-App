using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ZenoWeatherApp.Model;

[Owned]
public class DataReading
{
    public double Value
    {
        get; set;
    }

    public int UnitType
    {
        get; set;
    }

    public string? Unit
    {
        get; set;
    }
}

[Owned]
public class DataReadingPair
{
    public int DataReadingPairId
    {
        get; set;
    }

    public DataReading? Metric
    {
        get; set;
    }

    public DataReading? Imperial
    {
        get; set;
    }
}

[Owned]
public class WindDirection
{
    public int Degrees
    {
        get; set;
    }

    public string? Localized
    {
        get; set;
    }

    public string? English
    {
        get; set;
    }
}

[Owned]
public class Wind
{
    public int WindId
    {
        get; set;
    }

    public DataReadingPair? Speed
    {
        get; set;
    }

    public WindDirection? Direction
    {
        get; set;
    }
}

[Owned]
public class PrecipitationSummary
{
    public int PrecipitationSummaryId
    {
        get; set;
    }

    public DataReadingPair? PastHour
    {
        get; set;
    }

    public DataReadingPair? Past3Hours
    {
        get; set;
    }

    public DataReadingPair? Past6Hours
    {
        get; set;
    }

    public DataReadingPair? Past9Hours
    {
        get; set;
    }

    public DataReadingPair? Past12Hours
    {
        get; set;
    }

    public DataReadingPair? Past18Hours
    {
        get; set;
    }

    public DataReadingPair? Past24Hours
    {
        get; set;
    }
}

public class CurrentConditions
{
    public int CurrentConditionsId
    {
        get;set;
    }

    public string? WeatherText
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

    public DataReadingPair? Temperature
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

    public string? UVIndexText
    {
        get; set;
    }

    public DataReadingPair? DewPoint
    {
        get; set;
    }

    public Wind? Wind
    {
        get; set;
    }

    public DataReadingPair? Visibility
    {
        get; set;
    }

    public int CloudCover
    {
        get; set;
    }

    public DataReadingPair? Ceiling
    {
        get; set;
    }

    public DataReadingPair? Pressure
    {
        get; set;
    }

    public DataReadingPair? ApparentTemperature
    {
        get; set;
    }

    public DataReadingPair? WindChillTemperature
    {
        get; set;
    }

    public DataReadingPair? WetBulbTemperature
    {
        get; set;
    }

    public PrecipitationSummary? PrecipitationSummary
    {
        get; set;
    }

    public bool HasPrecipitation
    {
        get; set;
    }

    public string? PrecipitationType
    {
        get; set;
    }
}
