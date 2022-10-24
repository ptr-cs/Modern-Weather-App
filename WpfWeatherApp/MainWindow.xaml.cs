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
using WpfWeatherApp.ViewModel;

namespace WpfWeatherApp;
/// <summary>
/// Interaction logic for MainWindow.xaml
/// </summary>
public partial class MainWindow : MetroWindow
{
    MainViewModel MainViewModel
    {
        get; set;
    }

    public MainWindow()
    {
        InitializeComponent();

        MainViewModel = new MainViewModel(new NavigationViewModel()); 
        DataContext = MainViewModel;
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {

    }

    private void HamburgerMenuControl_OnItemInvoked(object sender, HamburgerMenuItemInvokedEventArgs e)
    {
        this.HamburgerMenuControl.Content = e.InvokedItem;

        //if (!e.IsItemOptions && this.HamburgerMenuControl.IsPaneOpen)
        //{
        //    // close the menu if a item was selected
        //    this.HamburgerMenuControl.IsPaneOpen = false;
        //}
    }
}
