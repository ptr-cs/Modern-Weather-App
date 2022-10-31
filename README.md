# Zeno Weather App

![weather-app-mockup](https://user-images.githubusercontent.com/112029487/198957729-cae2744c-0b12-47c9-aef1-2df051bc3bca.png)

API-enabled WPF weather app using MahApps Metro and the Accuweather API. Support for light/dark modes and custom accent colors. Testing ongoing with nUnit. Prototyped with Adobe XD.

![WPF-weather-appThumbv3](https://user-images.githubusercontent.com/112029487/198901489-b205c205-a96e-4500-9846-81d852e94cca.png)
# Text search:
![zeno-weather-app-searches](https://user-images.githubusercontent.com/112029487/198901498-f0d2d479-e5f2-4c45-9ce4-28d51645c580.gif)
# Themes:
![zeno-weather-app-themes](https://user-images.githubusercontent.com/112029487/198901504-e1d8fdd3-634a-4eed-aab9-18f69300668f.gif)

## Summary:
The app uses Service Oriented Architecture (SOA) to provide the weather service via a service bus, which is accessed primarily by the weather ViewModel - the Model-View-ViewModel (#MVVM) approach is used to maintain a separation of concerns between frontend and backend code. The weather service contains methods for asynchronously getting HTTP responses from calls to the Location, Current Conditions, and Forecast AccuWeather APIs; the results from these methods are then processed by the weather ViewModel, which in turn exposes the data to the weather page View.

Todo:
- eventually support multiple weather APIs. 
- create ASP.NET version to host on Azure App Service
