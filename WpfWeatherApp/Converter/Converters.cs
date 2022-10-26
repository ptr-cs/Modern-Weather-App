using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;
using MahApps.Metro.IconPacks;
using WpfWeatherApp.ViewModel;

namespace ZenoWeatherApp.Converters;

[ValueConversion(typeof(AppPage), typeof(int))]
public class AppPageToSelectedIndexConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        AppPage valueToConvert = (AppPage)value;
        return (int)valueToConvert;
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        var valueToConvert = (int)value;
        return (AppPage)valueToConvert;
    }
}

[ValueConversion(typeof(int), typeof(PackIconWeatherIconsKind))]
public class AccuWeatherIconToWeatherIconConverter : IValueConverter
{
    public PackIconWeatherIconsKind MapToIconKind(int input)
    {
        switch (input)
        {
            case 1:
                return PackIconWeatherIconsKind.DaySunny;
            case 2:
            case 3:
            case 4:
                return PackIconWeatherIconsKind.DaySunnyOvercast;
            case 5:
                return PackIconWeatherIconsKind.DayHaze;
            case 6:
                return PackIconWeatherIconsKind.DayCloudy;
            case 7:
                return PackIconWeatherIconsKind.Cloudy;
            case 8:
                return PackIconWeatherIconsKind.Cloud;
            case 11:
                return PackIconWeatherIconsKind.Fog;
            case 12:
                return PackIconWeatherIconsKind.Showers;
            case 13:
            case 14:
                return PackIconWeatherIconsKind.DayShowers;
            case 15:
                return PackIconWeatherIconsKind.Thunderstorm;
            case 16:
            case 17:
                return PackIconWeatherIconsKind.DayThunderstorm;
            case 18:
                return PackIconWeatherIconsKind.Rain;
            case 19:
                return PackIconWeatherIconsKind.SnowflakeCold;
            case 20:
            case 21:
            case 23:
                return PackIconWeatherIconsKind.DaySnow;
            case 22:
                return PackIconWeatherIconsKind.Snow;
            case 24:
            case 25:
                return PackIconWeatherIconsKind.Sleet;
            case 26:
            case 29:
                return PackIconWeatherIconsKind.RainMix;
            case 30:
                return PackIconWeatherIconsKind.Hot;
            case 31:
                return PackIconWeatherIconsKind.Thermometer;
            case 32:
                return PackIconWeatherIconsKind.Windy;
            case 33:
                return PackIconWeatherIconsKind.NightClear;
            case 34:
            case 35:
            case 36:
                return PackIconWeatherIconsKind.NightPartlyCloudy;
            case 37:
                return PackIconWeatherIconsKind.NightFog;
            case 38:
                return PackIconWeatherIconsKind.NightCloudy;
            case 39:
                return PackIconWeatherIconsKind.NightShowers;
            case 40:
                return PackIconWeatherIconsKind.NightAltShowers;
            case 41:
                return PackIconWeatherIconsKind.NightThunderstorm;
            case 42:
                return PackIconWeatherIconsKind.NightAltThunderstorm;
            case 43:
                return PackIconWeatherIconsKind.NightAltSnow;
            case 44:
                return PackIconWeatherIconsKind.NightSnow;
        }
        return PackIconWeatherIconsKind.Alien;
    }

    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        int valueToConvert = (int)value;
        return MapToIconKind(valueToConvert);
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}
