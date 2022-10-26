using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace ZenoWeatherApp.Validators;

public class TextQueryValidator : ValidationRule
{
    public override ValidationResult Validate(object value, System.Globalization.CultureInfo cultureInfo)
    {
        return new ValidationResult(
            ((string)value).Where(x => !char.IsLetterOrDigit(x)
            && !x.Equals(' ')
            && !x.Equals('-') 
            && !x.Equals(',') 
            && !x.Equals('.')).Count() == 0,
            "Search may only consist of: letters, numbers, spaces, dashes, commas, and periods ('-', ',', '.')");
    }
}
