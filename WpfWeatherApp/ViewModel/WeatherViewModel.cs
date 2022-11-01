using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;
using System.Windows.Input;
using WpfWeatherApp;
using ZenoWeatherApp.Model;
using ZenoWeatherApp.Services;

namespace ZenoWeatherApp.ViewModel;

public enum ServiceResultType
{
    None = 0,
    Information = 1,
    Error = 2
}

public enum UnitType
{
    Imperial = 0,
    Metric = 1
}

public class ServiceResult
{
    public string Text
    {
        get; set;
    } = "";

    public ServiceResultType Type
    {
        get; set;
    }
}

public class WeatherViewModel : BaseViewModel
{
    private Location? location;
    public Location? Location
    {
        get => location;
        set => SetProperty(ref location, value);
    }

    private CurrentConditions? currentConditions;
    public CurrentConditions? CurrentConditions
    {
        get => currentConditions;
        set => SetProperty(ref currentConditions, value);
    }

    private Forecast? forecast;
    public Forecast? Forecast
    {
        get => forecast;
        set => SetProperty(ref forecast, value);
    }

    private ServiceResult? serviceResult;
    public ServiceResult? ServiceResult
    {
        get => serviceResult;
        set => SetProperty(ref serviceResult, value);
    }

    private UnitType units;
    public UnitType Units
    {
        get => units;
        set => SetProperty(ref units, value);
    }

    private bool hasOtherResult;
    public bool HasOtherResult
    {
        get => hasOtherResult;
        set => SetProperty(ref hasOtherResult, value);
    }

    /// <summary>
    /// PreviousQuery is for saving API calls by reusing Location information
    /// if subsequent searches are made with same query
    /// </summary>
    public string PreviousQuery
    {
        get; set;
    } = "";

    /// <summary>
    /// Normalized minimum temperature for displaying bar-chart temperature values
    /// in the DailyForecast XAML DataTemplate
    /// </summary>
    private double normalizedMinimumTemp = -70; // lowest recorded @ Rogers Pass, MT
    public double NormalizedMinimumTemp
    {
        get => normalizedMinimumTemp;
        set => SetProperty(ref normalizedMinimumTemp, value);
    }

    private double normalizedMaximumTemp = 134; // highest recorded @ Death Valley, CA
    public double NormalizedMaximumTemp
    {
        get => normalizedMaximumTemp;
        set => SetProperty(ref normalizedMaximumTemp, value);
    }

    /// <summary>
    /// Normalized max precipitation value is for showing relative bar chart range
    /// in the current conditions summary
    /// </summary>

    //private ObservableCollection<int> precipSummaryList = new ObservableCollection<int>();
    //public ObservableCollection<int> PrecipSummaryList
    //{
    //    get => precipSummaryList;
    //    set => SetProperty(ref precipSummaryList, value);
    //}
    ////public CollectionViewSource PrecipSummaryListCollectionViewSource { get; set; } = new CollectionViewSource();
    ////public ICollectionView PrecipSummaryListCollectionView
    ////{
    ////    get; set;
    ////}

    //private int normalizedMaximumPrecip = 1;
    //public int NormalizedMaximumPrecip
    //{
    //    get => normalizedMaximumPrecip;
    //    set => SetProperty(ref normalizedMaximumPrecip, value);
    //}

    private bool searchInProgress = false;
    public bool SearchInProgress
    {
        get => searchInProgress;
        set => SetProperty(ref searchInProgress, value);
    }

    private ObservableCollection<object> dailyForecastCollection = new();
    public ObservableCollection<object> DailyForecastCollection
    {
        get => dailyForecastCollection;
        set => SetProperty(ref dailyForecastCollection, value);
    }
    public CollectionViewSource DailyForecastCollectionViewSource { get; set; } = new CollectionViewSource();
    public ICollectionView DailyForecastCollectionView
    {
        get; set;
    }

    public ICommand GetForecast
    {
        get; set;
    }

    public ICommand SetUnits
    {
        get; set;
    }

    public async Task<LocationResult> QueryLocationAsync(string query, string apiKey)
    {
        var weatherService = App.GetService<IWeatherService>();
        return await weatherService.GetLocationAsync(query, apiKey);
    }

    public async Task<CurrentConditions?> QueryCurrentConditionsAsync(string locationKey, string apiKey)
    {
        var weatherService = App.GetService<IWeatherService>();
        return await weatherService.GetCurrentConditionsAsync(locationKey, apiKey);
    }

    public async Task<Forecast?> QueryForecastAsync(string locationKey, string apiKey)
    {
        var weatherService = App.GetService<IWeatherService>();
        return await weatherService.GetForecastAsync(locationKey, apiKey, (Units == UnitType.Metric) ? true : false);
    }

    public WeatherViewModel()
    {
        GetForecast = new DelegateCommand(OnGetForecastAsync, null);
        SetUnits = new DelegateCommand(OnSetUnits, null);

        DailyForecastCollectionViewSource.Source = DailyForecastCollection;
        DailyForecastCollectionView = new CollectionView(DailyForecastCollectionViewSource.View);

        //PrecipSummaryListCollectionViewSource.Source = PrecipSummaryList;
        //PrecipSummaryListCollectionView = new CollectionView(PrecipSummaryListCollectionViewSource.View);
    }

    private void OnSetUnits(object? units)
    {
        if (units == null || units is not UnitType)
            return;

        var newUnits = (UnitType)units;

        if (newUnits == Units)
            return;

        Units = newUnits;
    }

    private void ResetWeatherResults()
    {
        Location = null;
        Forecast = null;
        DailyForecastCollection.Clear();
        CurrentConditions = null;
    }

   // private void RefreshPrecipitationValues()
   // {
   //     var temp = new List<double>();
   //     var max = 0;
   //     switch (Units)
   //     {
   //         case UnitType.Imperial:
   //             temp = new List<double>() {
   //                             CurrentConditions.PrecipitationSummary.PastHour.Imperial.Value,
   //                             CurrentConditions.PrecipitationSummary.Past3Hours.Imperial.Value,
   //                             CurrentConditions.PrecipitationSummary.Past6Hours.Imperial.Value,
   //                             CurrentConditions.PrecipitationSummary.Past9Hours.Imperial.Value,
   //                             CurrentConditions.PrecipitationSummary.Past12Hours.Imperial.Value,
   //                             CurrentConditions.PrecipitationSummary.Past18Hours.Imperial.Value,
   //                             CurrentConditions.PrecipitationSummary.Past24Hours.Imperial.Value,
   //                         };

   //             max = (int)Math.Ceiling(temp.Max(x => x));
   //             break;
   //         case UnitType.Metric:
   //             temp = new List<double>() {
   //                             CurrentConditions.PrecipitationSummary.PastHour.Metric.Value,
   //                             CurrentConditions.PrecipitationSummary.Past3Hours.Metric.Value,
   //                             CurrentConditions.PrecipitationSummary.Past6Hours.Metric.Value,
   //                             CurrentConditions.PrecipitationSummary.Past9Hours.Metric.Value,
   //                             CurrentConditions.PrecipitationSummary.Past12Hours.Metric.Value,
   //                             CurrentConditions.PrecipitationSummary.Past18Hours.Metric.Value,
   //                             CurrentConditions.PrecipitationSummary.Past24Hours.Metric.Value,
   //                         };

   //             max = (int)Math.Ceiling(temp.Max(x => x));
   //             if (CurrentConditions.PrecipitationSummary.PastHour.Metric.Unit == "mm")
   //                 max /= 10;
   //             break;
   //     }
   //     NormalizedMaximumPrecip = (max == 0) ? 1 : max;
   //     PrecipSummaryList.Clear();
   //     for (int i = 0; i < NormalizedMaximumPrecip; ++i)
   //         PrecipSummaryList.Add(i);
   //}

    private async void OnGetForecastAsync(object? obj)
    {
        var mainViewModel = App.GetService<MainViewModel>();
        var apiKey = mainViewModel.ApiKey;
        var queryText = mainViewModel.LocationSearchText;
        ServiceResult = null;

        if (string.IsNullOrEmpty(queryText) || string.IsNullOrEmpty(apiKey))
        {
            ResetWeatherResults();
            return;
        }

        SearchInProgress = true;
        Location? location;
        LocationResult? locationResult = null;

        if (PreviousQuery == queryText && Location != null)
            location = Location;
        else
        {
            ResetWeatherResults();
            locationResult = await QueryLocationAsync(queryText, apiKey);
            location = locationResult.Location;
        }

        PreviousQuery = queryText;
        
        if (location != null)
        {
            Location = location;

            CurrentConditions = null;
            Forecast = null;
            DailyForecastCollection.Clear();

            var currentConditions = await QueryCurrentConditionsAsync(location.Key, apiKey);
            if (currentConditions != null)
            {
                CurrentConditions = currentConditions;
            }

            var forecast = await QueryForecastAsync(location.Key, apiKey);
            if (forecast != null)
            {
                Forecast = forecast;
                DailyForecastCollection.Add(Forecast.Headline);
                foreach (var dailyForecast in Forecast.DailyForecasts)
                    DailyForecastCollection.Add(dailyForecast);

                NormalizedMinimumTemp = DailyForecastCollection.OfType<DailyForecast>().Min(x => x.Temperature.Minimum.Value) - 10.0;
                NormalizedMaximumTemp = DailyForecastCollection.OfType<DailyForecast>().Max(x => x.Temperature.Maximum.Value) + 10.0;
            }
        }
        else
        {
            ResetWeatherResults();

            if (locationResult != null)
            {
                if (locationResult.IsSuccessStatusCode)
                {
                    if (locationResult.ParsingResult == true)
                    {
                        ServiceResult = new ServiceResult()
                        {
                            Text = $"No matching locations found for '{queryText}'.",
                            Type = ServiceResultType.Information
                        };
                    }
                    else
                    {
                        ServiceResult = new ServiceResult()
                        {
                            Text = $"There was an error handling the result for '{queryText}'; please try again later.",
                            Type = ServiceResultType.Error
                        };
                    }
                }
                else
                {
                    ServiceResult = new ServiceResult()
                    {
                        Text = $"There was an error handling the search for '{queryText}';\n Status: {locationResult.StatusCode}, Reason: {locationResult.ReasonPhrase}",
                        Type = ServiceResultType.Error
                    };
                }
            }
            else
            {
                ServiceResult = new ServiceResult()
                {
                    Text = $"A application error has occurred while querying the server.",
                    Type = ServiceResultType.Error
                };
            }
        }

        SearchInProgress = false;

        HasOtherResult = ServiceResult != null;
    }
}