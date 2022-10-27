# Zeno Weather App
API-enabled WPF weather app using MahApps Metro and the Accuweather API. Support for light/dark modes and custom accent colors. Testing ongoing with nUnit. Prototyped with Adobe XD.

![wpf-weather-app2](https://user-images.githubusercontent.com/112029487/198192860-9c9ac1ba-58cf-48d2-8f63-00a4bbd04e83.gif)
![wpf-weather-app3](https://user-images.githubusercontent.com/112029487/198192872-f616c6c4-2394-41c7-85a7-75a9756c1adb.gif)

## Summary:
The app uses Service Oriented Architecture (SOA) to provide the weather service via a service bus, which is accessed primarily by the weather ViewModel - the Model-View-ViewModel (#MVVM) approach is used to maintain a separation of concerns between frontend and backend code. The weather service contains methods for asynchronously getting HTTP responses from calls to the Location, Current Conditions, and Forecast AccuWeather APIs; the results from these methods are then processed by the weather ViewModel, which in turn exposes the data to the weather page View.

Todo:
- eventually support multiple weather APIs. 
- create ASP.NET version to host on Azure App Service
