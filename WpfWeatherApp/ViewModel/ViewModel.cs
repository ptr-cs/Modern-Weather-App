using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using System.Windows;
using System.Diagnostics;
using ControlzEx.Theming;
using System.Windows.Media;
using System.Collections.ObjectModel;
using System.Windows.Data;
using System.Collections;
using System.Globalization;
using System.Windows.Controls;
using ZenoWeatherApp.Model;
using ZenoWeatherApp.Services;

namespace WpfWeatherApp.ViewModel;

public enum AppPage
{
    Weather = 0,
    Settings = 1,
    About = 2,
    GitHub = 3
}

public class WeatherViewModel : BaseViewModel
{
    private Location? location;
    public Location? Location
    {
        get => location;
        set => SetProperty(ref location, value);
    }

    private Forecast? forecast;
    public Forecast? Forecast
    {
        get => forecast;
        set => SetProperty(ref forecast, value);
    }

    private ObservableCollection<DailyForecast> dailyForecastCollection = new();
    public ObservableCollection<DailyForecast> DailyForecastCollection
    {
        get => dailyForecastCollection;
        set => SetProperty(ref dailyForecastCollection, value);
    }
    public CollectionViewSource DailyForecastCollectionViewSource { get; set; } = new CollectionViewSource();
    public ICollectionView DailyForecastCollectionView
    {
        get; set;
    }

    public ICommand GetForecast
    {
        get; set;
    }

    public async Task<Location?> QueryLocationAsync(string query, string apiKey)
    {
        var weatherService = App.GetService<IWeatherService>();
        return await weatherService.GetLocationAsync(query, apiKey);
    }

    public async Task<Forecast?> QueryForecastAsync(string locationKey, string apiKey)
    {
        var weatherService = App.GetService<IWeatherService>();
        return await weatherService.GetForecastAsync(locationKey, apiKey);
    }

    public WeatherViewModel()
    {
        GetForecast = new DelegateCommand(OnGetForecastAsync, null);

        DailyForecastCollectionViewSource.Source = DailyForecastCollection;
        DailyForecastCollectionView = new CollectionView(DailyForecastCollectionViewSource.View);
    }

    private async void OnGetForecastAsync(object? obj)
    {
        var apiKey = MainWindow.MainViewModel.ApiKey;
        var location = await QueryLocationAsync(MainWindow.MainViewModel.LocationSearchText, apiKey);
        if (location != null)
        {
            Location = location;
            var forecast = await QueryForecastAsync(location.Key, apiKey);
            if (forecast != null)
            {
                Forecast = forecast;
                DailyForecastCollection.Clear();
                foreach (var dailyForecast in Forecast.DailyForecasts)
                    DailyForecastCollection.Add(dailyForecast);
            }
            else
                Forecast = null;
        }
        else
            Location = null;

        if (Location == null || Forecast == null)
            DailyForecastCollection.Clear();
    }
}

public class NavigationViewModel : BaseViewModel
{
    private AppPage currentPage = AppPage.Weather;
    public AppPage CurrentPage
    {
        get => currentPage;
        set => SetProperty(ref currentPage, value);
    }

    private Frame mainNavigationFrame;
    public Frame MainNavigationFrame
    {
        get => mainNavigationFrame;
        set => SetProperty(ref mainNavigationFrame, value);
    }

    public ICommand NavigateToPage
    {
        get;set;
    }
    public ICommand NavigateToSite
    {
        get; set;
    }

    public void OnNavigateToPage(object? appPage)
    {
        if (appPage == null || appPage is not AppPage)
            return;

        CurrentPage = (AppPage)appPage;

        if (CurrentPage == AppPage.Weather)
        {
            MainNavigationFrame.Navigate(new Uri("pack://application:,,,/ZenoWeatherApp;component/Pages/Weather.xaml", UriKind.RelativeOrAbsolute));
        }
        else if (CurrentPage == AppPage.Settings)
        {
            MainNavigationFrame.Navigate(new Uri("pack://application:,,,/ZenoWeatherApp;component/Pages/Settings.xaml", UriKind.RelativeOrAbsolute));
        }
    }

    public void OnNavigateToSite(object? targetURL)
    {
        if (targetURL == null || targetURL is not string)
            return;

        var url = (string)targetURL;

        var psi = new ProcessStartInfo
        {
            FileName = url,
            UseShellExecute = true
        };
        Process.Start(psi);
    }

    public NavigationViewModel(Frame f)
    {
        NavigateToPage = new DelegateCommand(OnNavigateToPage, null);
        NavigateToSite = new DelegateCommand(OnNavigateToSite, null);
        MainNavigationFrame = f;
    }
}

public class MainViewModel : BaseViewModel
{
    private ObservableCollection<AccentColorMenuData> accentColorCollection = new();
    public ObservableCollection<AccentColorMenuData> AccentColorCollection
    {
        get => accentColorCollection;
        set => SetProperty(ref accentColorCollection, value);
    }
    public CollectionViewSource AccentColorCollectionViewSource { get; set; } = new CollectionViewSource();
    public ICollectionView AccentColorCollectionView
    {
        get; set;
    }

    private ObservableCollection<AppThemeMenuData> appThemeCollection = new ();
    public ObservableCollection<AppThemeMenuData> AppThemeCollection
    {
        get => appThemeCollection;
        set => SetProperty(ref appThemeCollection, value);
    }
    public CollectionViewSource AppThemeCollectionViewSource { get; set; } = new CollectionViewSource();
    public ICollectionView AppThemeCollectionView
    {
        get; set;
    }

    private string locationSearchText = "";
    public string LocationSearchText
    {
        get => locationSearchText;
        set => SetProperty(ref locationSearchText, value);
    }

    private string apiKey = "";
    public string ApiKey
    {
        get => apiKey;
        set => SetProperty(ref apiKey, value);
    }

    public NavigationViewModel NavigationViewModel
    {
        get;set;
    }

    public WeatherViewModel WeatherViewModel
    {
        get; set;
    }

    public MainViewModel(NavigationViewModel navigationViewModel, WeatherViewModel weatherViewModel)
    {
        NavigationViewModel = navigationViewModel;
        WeatherViewModel = weatherViewModel;

        // create accent color menu items for the demo
        this.AccentColorCollection = new ObservableCollection<AccentColorMenuData>(ThemeManager.Current.Themes
            .GroupBy(x => x.ColorScheme)
            .OrderBy(a => a.Key)
            .OrderBy(a => a.Key != "Blue")
            .Select(a => new AccentColorMenuData { Name = a.Key, ColorBrush = a.First().ShowcaseBrush })
            .ToList());

        // create metro theme color menu items for the demo
        this.AppThemeCollection = new ObservableCollection<AppThemeMenuData>(ThemeManager.Current.Themes
            .GroupBy(x => x.BaseColorScheme)
            .Select(x => x.First())
            .Select(a => new AppThemeMenuData { Name = a.BaseColorScheme, BorderColorBrush = a.Resources["MahApps.Brushes.ThemeForeground"] as Brush, ColorBrush = a.Resources["MahApps.Brushes.ThemeBackground"] as Brush })
            .ToList());

        AccentColorCollectionViewSource.Source = AccentColorCollection;
        AccentColorCollectionView = new CollectionView(AccentColorCollectionViewSource.View);

        AppThemeCollectionViewSource.Source = AppThemeCollection;
        AppThemeCollectionView = new CollectionView(AppThemeCollectionViewSource.View);
    }
}

public class AccentColorMenuData
{
    public string? Name
    {
        get; set;
    }

    public Brush? BorderColorBrush
    {
        get; set;
    }

    public Brush? ColorBrush
    {
        get; set;
    }

    public AccentColorMenuData()
    {
        this.ChangeAccentCommand = new DelegateCommand(DoChangeTheme, null);
    }

    public ICommand ChangeAccentCommand
    {
        get; set;
    }

    protected virtual void DoChangeTheme(object? name)
    {
        if (name is not null && name is string)
        {
            ThemeManager.Current.ChangeThemeColorScheme(Application.Current, (string)name);
            MainWindow.MainViewModel.AccentColorCollectionView.MoveCurrentTo(
                MainWindow.MainViewModel.AccentColorCollection.Where(x => x.Name == (string)name));
        }
    }
}

public class AppThemeMenuData : AccentColorMenuData
{
    protected override void DoChangeTheme(object? name)
    {
        if (name is not null && name is string)
        {
            ThemeManager.Current.ChangeThemeBaseColor(Application.Current, (string)name);
            MainWindow.MainViewModel.AppThemeCollectionView.MoveCurrentTo(
                MainWindow.MainViewModel.AppThemeCollection.Where(x => x.Name == (string)name));
        }
    }
}