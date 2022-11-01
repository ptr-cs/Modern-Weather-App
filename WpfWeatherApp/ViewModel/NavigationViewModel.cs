using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using MahApps.Metro.Controls.Dialogs;
using MahApps.Metro.Controls;
using WpfWeatherApp;

namespace ZenoWeatherApp.ViewModel;

public enum AppPage
{
    Weather = 0,
    Settings = 1,
    About = 2,
    GitHub = 3
}

public class NavigationViewModel : BaseViewModel
{
    private AppPage currentPage = AppPage.Weather;
    public AppPage CurrentPage
    {
        get => currentPage;
        set => SetProperty(ref currentPage, value);
    }

    private Frame? mainNavigationFrame;
    public Frame? MainNavigationFrame
    {
        get => mainNavigationFrame;
        set => SetProperty(ref mainNavigationFrame, value);
    }

    public ICommand NavigateToPage
    {
        get; set;
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
            MainNavigationFrame?.Navigate(new Uri("pack://application:,,,/ZenoWeatherApp;component/Pages/Weather.xaml", UriKind.RelativeOrAbsolute));
        }
        else if (CurrentPage == AppPage.Settings)
        {
            MainNavigationFrame?.Navigate(new Uri("pack://application:,,,/ZenoWeatherApp;component/Pages/Settings.xaml", UriKind.RelativeOrAbsolute));
        }
        else if (CurrentPage == AppPage.About)
        {
            MainNavigationFrame?.Navigate(new Uri("pack://application:,,,/ZenoWeatherApp;component/Pages/About.xaml", UriKind.RelativeOrAbsolute));
        }
    }

    public async void OnNavigateToSiteAsync(object? targetURL)
    {
        if (targetURL == null || targetURL is not string)
            return;

        var url = (string)targetURL;

        var settings = new MetroDialogSettings()
        {
            AffirmativeButtonText = " Visit Site ",
            NegativeButtonText = "Close",
            DialogButtonFontSize = 20D
        };

        MetroWindow mw = (MetroWindow)Application.Current.MainWindow;

        MessageDialogResult result = await mw.ShowMessageAsync(
            $"Visit Website?", $"{url}", MessageDialogStyle.AffirmativeAndNegative, settings);

        if (result == MessageDialogResult.Affirmative)
        {
            var psi = new ProcessStartInfo
            {
                FileName = url,
                UseShellExecute = true
            };
            Process.Start(psi);
        }
    }

    public NavigationViewModel()
    {
        NavigateToPage = new DelegateCommand(OnNavigateToPage, null);
        NavigateToSite = new DelegateCommand(OnNavigateToSiteAsync, null);
    }
}