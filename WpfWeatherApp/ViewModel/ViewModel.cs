using System.ComponentModel;
using System.Linq;
using System.Windows.Input;
using System.Windows;
using ControlzEx.Theming;
using System.Windows.Media;
using System.Collections.ObjectModel;
using System.Windows.Data;
using ZenoWeatherApp.ViewModel;
using WpfWeatherApp;

namespace ZenoWeatherApp.ViewModel;

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