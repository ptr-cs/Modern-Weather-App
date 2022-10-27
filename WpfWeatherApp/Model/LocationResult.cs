using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace ZenoWeatherApp.Model;

public class LocationResult
{
    public Location? Location
    {
        get; set;
    }
    public HttpStatusCode StatusCode
    {
        get; set;
    }
    public string? ReasonPhrase
    {
        get; set;
    }
    public bool? ParsingResult
    {
        get; set;
    }

    public bool IsSuccessStatusCode => ((int)StatusCode >= 200) && ((int)StatusCode <= 299);
}