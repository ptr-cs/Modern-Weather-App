using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZenoWeatherApp.Model;

public class Location
{
    public int Version
    {
        get; set;
    }

    [Key]
    public string Key
    {
        get; set;
    }

    public string? Type
    {
        get; set;
    }

    public int? Rank
    {
        get; set;
    }

    public string? LocalizedName
    {
        get; set;
    }

    public string? EnglishName
    {
        get; set;
    }

    public string? PrimaryPostalCode
    {
        get; set;
    }

    public Country? Country
    {
        get; set;
    }

    public AdministrativeArea? AdministrativeArea
    {
        get; set;
    }

    public TimeZone? TimeZone
    {
        get; set;
    }
}

public class TimeZone
{   
    [Key]
    public string? Code
    {
        get; set;
    }

    public string? Name
    {
        get; set;
    }

    public float GmtOffset
    {
        get; set;
    }

    public bool IsDaylightSaving
    {
        get; set;
    }

    public virtual List<Location> Locations
    {
        get;set;
    }
}


public class AdministrativeArea
{
    public string? ID
    {
        get; set;
    }

    public string? LocalizedName
    {
        get; set;
    }

    public string? EnglishName
    {
        get; set;
    }

    public string? LocalizedType
    {
        get; set;
    }

    public string? EnglishType
    {
        get; set;
    }

    public virtual List<Location> Locations
    {
        get; set;
    }
}


public class Country
{
    public string? ID
    {
        get; set;
    }

    public string? LocalizedName
    {
        get; set;
    }

    public string? EnglishName
    {
        get; set;
    }

    public virtual List<Location> Locations
    {
        get; set;
    }
}