# Modern Weather App

WPF weather app using MahApps Metro and the Accuweather API. Support for light/dark modes and custom accent colors. Demo mode data is provided via Entity Framework Core from a Sqlite database with randomized results. Testing ongoing with nUnit. Prototyped with Adobe XD.

![weather-app-mockup](https://user-images.githubusercontent.com/112029487/198957729-cae2744c-0b12-47c9-aef1-2df051bc3bca.png)

# Try it Out:
- **Demo mode**: On the Settings page, set the Demo Mode toggle switch to "On" to enable Demo mode. In this mode, randomized data will be returned for location search queries on the Weather page.
- **API mode**: On the Settings page, with the Demo Mode toggle switch to "Off", enter an AccuWeather API key to return API results to location search queries on the Weather page.

![WPF-weather-appThumbv3](https://user-images.githubusercontent.com/112029487/198901489-b205c205-a96e-4500-9846-81d852e94cca.png)
# Text search:
![zeno-weather-app-searches](https://user-images.githubusercontent.com/112029487/198901498-f0d2d479-e5f2-4c45-9ce4-28d51645c580.gif)
# Themes:
![zeno-weather-app-themes](https://user-images.githubusercontent.com/112029487/198901504-e1d8fdd3-634a-4eed-aab9-18f69300668f.gif)

## Summary:
The app uses Service Oriented Architecture (SOA) to provide the weather service via a service bus, which is accessed primarily by the weather ViewModel - the Model-View-ViewModel (#MVVM) approach is used to maintain a separation of concerns between frontend and backend code. The weather service contains methods for asynchronously getting HTTP responses from calls to the Location, Current Conditions, and Forecast AccuWeather APIs; the results from these methods are then processed by the weather ViewModel, which in turn exposes the data to the weather page View.
