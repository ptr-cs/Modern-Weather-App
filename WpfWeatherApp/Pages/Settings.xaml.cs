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
using WpfWeatherApp.ViewModel;

namespace ZenoWeatherApp.Pages;
/// <summary>
/// Interaction logic for Settings.xaml
/// </summary>
public partial class Settings : Page
{
    public Settings()
    {
        InitializeComponent();
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
            //MainWindow.MainViewModel.AccentColorCollectionView.MoveCurrentTo(
            //    MainWindow.MainViewModel.AccentColorCollection.Where(x => x.Name == item.Name));
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
            //MainWindow.MainViewModel.AppThemeCollectionView.MoveCurrentTo(
            //        MainWindow.MainViewModel.AppThemeCollection.Where(x => x.Name == item.Name));
        }
    }
}
