using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZenoWeatherApp.Model;

public class LocalSettingsOptions
{
    public string? ApplicationDataFolder
    {
        get; set;
    }

    public string? LocalSettingsFile
    {
        get; set;
    }
}
