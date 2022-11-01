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
using MahApps.Metro.Controls.Dialogs;
using ZenoWeatherApp.ViewModel;

namespace WpfWeatherApp;
/// <summary>
/// Interaction logic for MainWindow.xaml
/// </summary>
public partial class MainWindow : MetroWindow
{
    public NavigationViewModel ViewModel
    {
        get; set;
    }

    public MainWindow()
    {
        InitializeComponent();

        ViewModel = App.GetService<NavigationViewModel>();
        ViewModel.MainNavigationFrame = mainNavigationFrame;
        DataContext = ViewModel;
    }

    private void MainNavigationFrame_Navigated(object sender, NavigationEventArgs e)
    {
        // ((FrameworkElement)e.Content).DataContext = ViewModel;
    }
}
