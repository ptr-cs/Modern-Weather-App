using System;
using System.Collections.Generic;
using System.Diagnostics;
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
using WpfWeatherApp.ViewModel;

namespace WpfWeatherApp;
/// <summary>
/// Interaction logic for MainWindow.xaml
/// </summary>
public partial class MainWindow : MetroWindow
{
    public static MainViewModel MainViewModel
    {
        get; set;
    }

    public MainWindow()
    {
        InitializeComponent();

        MainViewModel = new MainViewModel(new NavigationViewModel(mainNavigationFrame), new WeatherViewModel()); 
        DataContext = MainViewModel;
    }

    private void MainNavigationFrame_Navigated(object sender, NavigationEventArgs e)
    {
        ((FrameworkElement)e.Content).DataContext = MainViewModel;
    }
}
