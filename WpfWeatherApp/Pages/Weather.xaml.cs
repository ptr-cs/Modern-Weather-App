using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using MahApps.Metro.Controls;
using MahApps.Metro.Controls.Dialogs;
using WpfWeatherApp;
using ZenoWeatherApp.Model;
using ZenoWeatherApp.Services;
using ZenoWeatherApp.ViewModel;

namespace ZenoWeatherApp.Pages;
/// <summary>
/// Interaction logic for Weather.xaml
/// </summary>
public partial class Weather : Page
{
    public MainViewModel ViewModel
    {
        get; set;
    }

    public Weather()
    {
        InitializeComponent();
        ViewModel = App.GetService<MainViewModel>();
        DataContext = ViewModel;
    }

    private async void TextBox_PreviewKeyDown(object sender, KeyEventArgs e)
    {
        if (e.Key == Key.Enter)
        {
            if (ViewModel.WeatherViewModel.GetForecast.CanExecute(null))
                ViewModel.WeatherViewModel.GetForecast.Execute(null);
        }
    }
}
