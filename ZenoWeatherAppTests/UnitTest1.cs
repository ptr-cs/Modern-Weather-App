using WpfWeatherApp.ViewModel;

namespace ZenoWeatherAppTests;

[TestFixture]
public class NavigationTests
{
    NavigationViewModel navigationViewModel;
    
    [SetUp]
    public void Setup()
    {
        navigationViewModel = new NavigationViewModel(new System.Windows.Controls.Frame());
    }

    [Test]
    public void NavigateToPage()
    {
        navigationViewModel.NavigateToPage.Execute(AppPage.Settings);
        Assert.That(navigationViewModel.CurrentPage, Is.EqualTo(AppPage.Settings));

        navigationViewModel.NavigateToPage.Execute(AppPage.Weather);
        Assert.That(navigationViewModel.CurrentPage, Is.Not.EqualTo(AppPage.Settings));

        navigationViewModel.NavigateToPage.Execute(null);
        Assert.That(navigationViewModel.CurrentPage, Is.EqualTo(AppPage.Weather));
    }
}