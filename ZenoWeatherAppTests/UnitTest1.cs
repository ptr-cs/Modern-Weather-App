using System.Diagnostics;
using WpfWeatherApp;
using ZenoWeatherApp.Services;
using ZenoWeatherApp.ViewModel;

namespace ZenoWeatherAppTests;

[TestFixture]
public class NavigationTests
{
    App app = new();

    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void NavigateToPage([Values] AppPage appPage)
    {
        var navigationViewModel = App.GetService<NavigationViewModel>();
        navigationViewModel.NavigateToPage.Execute(appPage);
        Assert.That(navigationViewModel.CurrentPage, Is.EqualTo(appPage));
    }

    [Test]
    public void SearchPreventedWithoutAPI()
    {
        var mainViewModel = App.GetService<MainViewModel>();
        var weatherViewModel = App.GetService<WeatherViewModel>();
        mainViewModel.ApiKey = "";
        weatherViewModel.GetForecast.Execute(null);
        Assert.That(weatherViewModel.Location, Is.Null);
    }

    [Test]
    public void SearchPreventedWithoutQuery()
    {
        var mainViewModel = App.GetService<MainViewModel>();
        var weatherViewModel = App.GetService<WeatherViewModel>();
        mainViewModel.ApiKey = "apiKey";
        mainViewModel.LocationSearchText = "";
        weatherViewModel.GetForecast.Execute(null);
        Assert.That(weatherViewModel.Location, Is.Null);
    }

    [Test]
    public void UnitsChangeSucceeds([Values] UnitType unitType)
    {
        var weatherViewModel = App.GetService<WeatherViewModel>();
        weatherViewModel.SetUnits.Execute(unitType);
        Assert.That(weatherViewModel.Units, Is.EqualTo(unitType));
    }

    [Test]
    public void ThemeChangeSucceeds()
    {
        //var mainViewModel = App.GetService<MainViewModel>();
        //AccentColorMenuData? acmd = mainViewModel.AccentColorCollection.Where(x => x.Name == "Yellow").FirstOrDefault();
        //acmd.ChangeAccentCommand.Execute(acmd.Name);
        //Assert.That(mainViewModel.AccentColorCollectionView.CurrentItem, Is.EqualTo(acmd));
    }
}