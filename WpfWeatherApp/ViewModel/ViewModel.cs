using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using System.Windows;

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
    public virtual void OnNavigateToPage(object? appPage)
    {
        if (appPage == null || appPage is not AppPage)
            return;

        CurrentPage = (AppPage)appPage;
    }
}

public class NavigationViewModel : NavigationViewModelBase
{
    private AppPage currentPage = AppPage.Weather;
    public override AppPage CurrentPage
    {
        get => currentPage;
        set => SetProperty(ref currentPage, value);
    }

    public override ICommand NavigateToPage
    {
        get;set;
    }

    public NavigationViewModel()
    {
        NavigateToPage = new DelegateCommand(OnNavigateToPage, null);
    }
}

public class MainViewModel : BaseViewModel
{
    public NavigationViewModelBase NavigationViewModel
    {
        get;set;
    }

    public MainViewModel(NavigationViewModelBase navigationViewModel)
    {
        NavigationViewModel = navigationViewModel;
    }
}