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
using WpfWeatherApp;
using ZenoWeatherApp.ViewModel;

namespace ZenoWeatherApp.Pages;
/// <summary>
/// Interaction logic for Settings.xaml
/// </summary>
public partial class Settings : Page
{
    public bool passwordBoxFocus = false;
    public int focusCounter = 0;
    public MainViewModel ViewModel
    {
        get; set;
    }

    public Settings()
    {
        InitializeComponent();
        ViewModel = App.GetService<MainViewModel>();
        DataContext = ViewModel;

        apiKeyPasswordBox.Password = ViewModel.ApiKey;
        focusCounter = 0;
    }

    private void AccentColorComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        ComboBox cb = (ComboBox)sender;
        if (cb.SelectedItem == null)
            return;

        AccentColorMenuData item = (AccentColorMenuData)cb.SelectedItem;
        if (item != null)
        {
            item.ChangeAccentCommand.Execute(item.Name);
            //ViewModel.AccentColorCollectionView.MoveCurrentTo(
            //    ViewModel.AccentColorCollection.Where(x => x.Name == item.Name));
        }
    }

    private void AppThemeComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        ComboBox cb = (ComboBox)sender;
        if (cb.SelectedItem == null)
            return;

        AppThemeMenuData item = (AppThemeMenuData)cb.SelectedItem;
        if (item != null)
        {
            item.ChangeAccentCommand.Execute(item.Name);
            //ViewModel.AppThemeCollectionView.MoveCurrentTo(
            //    ViewModel.AppThemeCollection.Where(x => x.Name == item.Name));
        }
    }

    private void PasswordBox_PasswordChanged(object sender, RoutedEventArgs e)
    {
        if (passwordBoxFocus)
            ViewModel.ApiKey = apiKeyPasswordBox.Password;
    }

    private void apiKeyPasswordBox_GotFocus(object sender, RoutedEventArgs e)
    {
        if (focusCounter > 0)
            passwordBoxFocus = true;
        focusCounter++;
    }

    private void apiKeyPasswordBox_LostFocus(object sender, RoutedEventArgs e)
    {
        passwordBoxFocus = false;
    }
}
