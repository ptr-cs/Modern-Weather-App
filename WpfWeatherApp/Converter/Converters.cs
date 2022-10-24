using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;
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
