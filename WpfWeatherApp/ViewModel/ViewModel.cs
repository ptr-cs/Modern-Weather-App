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

namespace WpfWeatherApp.ViewModel;

public enum AppPage
{
    Weather = 0,
    Settings = 1,
    About = 2,
    GitHub = 3
}

public abstract class NavigationViewModelBase : BaseViewModel
{
    public abstract AppPage CurrentPage
    {
        get; set;
    }

    public abstract ICommand NavigateToPage
    {
        get; set;
    }

    public abstract ICommand NavigateToSite
    {
        get; set;
    }

    public abstract void OnNavigateToPage(object? appPage);
    public abstract void OnNavigateToSite(object? targetURL);
}

public class NavigationViewModel : NavigationViewModelBase
{
    private AppPage currentPage = AppPage.Weather;
    public override AppPage CurrentPage
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

    public override ICommand NavigateToPage
    {
        get;set;
    }
    public override ICommand NavigateToSite
    {
        get; set;
    }

    public override void OnNavigateToPage(object? appPage)
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

    public override void OnNavigateToSite(object? targetURL)
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

    public ObservableCollection<ThemeResource> ThemeResources
    {
        get;
    }

    public NavigationViewModelBase NavigationViewModel
    {
        get;set;
    }

    public void UpdateThemeResources()
    {
        this.ThemeResources.Clear();

        if (Application.Current.MainWindow != null)
        {
            var theme = ThemeManager.Current.DetectTheme(Application.Current.MainWindow);
            if (theme is not null)
            {
                var libraryTheme = theme.LibraryThemes.FirstOrDefault(x => x.Origin == "MahApps.Metro");
                var resourceDictionary = libraryTheme?.Resources.MergedDictionaries.FirstOrDefault();

                if (resourceDictionary != null)
                {
                    foreach (var dictionaryEntry in resourceDictionary.OfType<DictionaryEntry>())
                    {
                        this.ThemeResources.Add(new ThemeResource(theme, libraryTheme!, resourceDictionary, dictionaryEntry));
                    }
                }
            }
        }
    }

    public MainViewModel(NavigationViewModelBase navigationViewModel)
    {
        NavigationViewModel = navigationViewModel;

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

        //this.ThemeResources = new ObservableCollection<ThemeResource>();
        //var view = CollectionViewSource.GetDefaultView(this.ThemeResources);
        //view.SortDescriptions.Add(new SortDescription(nameof(ThemeResource.Key), ListSortDirection.Ascending));
        //this.UpdateThemeResources();
    }
}

public class ThemeResource
{
    public ThemeResource(Theme theme, LibraryTheme libraryTheme, ResourceDictionary resourceDictionary, DictionaryEntry dictionaryEntry)
        : this(theme, libraryTheme, resourceDictionary, dictionaryEntry.Key.ToString(), dictionaryEntry.Value)
    {
    }

    public ThemeResource(Theme theme, LibraryTheme libraryTheme, ResourceDictionary resourceDictionary, string? key, object? value)
    {
        this.Theme = theme;
        this.LibraryTheme = libraryTheme;

        this.Source = (resourceDictionary.Source?.ToString() ?? "Runtime").ToLower();
        this.Source = CultureInfo.InstalledUICulture.TextInfo.ToTitleCase(this.Source)
                                 .Replace("Pack", "pack")
                                 .Replace("Application", "application")
                                 .Replace("Xaml", "xaml");

        this.Key = key;

        this.Value = value switch
        {
            Color color => new SolidColorBrush(color),
            Brush brush => brush,
            _ => null
        };

        this.StringValue = value?.ToString();
    }

    public Theme Theme
    {
        get;
    }

    public LibraryTheme LibraryTheme
    {
        get;
    }

    public string Source
    {
        get;
    }

    public string? Key
    {
        get;
    }

    public Brush? Value
    {
        get;
    }

    public string? StringValue
    {
        get;
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