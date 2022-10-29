using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZenoWeatherApp.Model;

public struct Country
{
    public string ID
    {
        get; set;
    }

    public string LocalizedName
    {
        get; set;
    }
}

public struct AdministrativeArea
{
    public string ID
    {
        get; set;
    }

    public string LocalizedName
    {
        get; set;
    }
}

public class Location
{
    public string Key 
    { 
        get; set; 
    }

    public string Type
    {
        get; set;
    }

    public string LocalizedName
    {
        get; set;
    }

    public string PrimaryPostalCode
    {
        get; set;
    }

    public Country Country
    {
        get; set;
    }

    public AdministrativeArea AdministrativeArea
    {
        get; set;
    }

    public List<string> DataSets
    {
        get; set;
    }
}