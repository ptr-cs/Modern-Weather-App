import React from 'react';

export default function WeatherIconMapper({ weatherIcon }) {
    switch (weatherIcon) {
        case 1:
            return (<i className="wi wi-day-sunny"></i>);
        case 2:
        case 3:
        case 4:
            return (<i className="wi wi-day-sunny-overcast"></i>);
        case 5:
            return (<i className="wi wi-day-haze"></i>);
        case 6:
            return (<i className="wi wi-day-cloudy"></i>);
        case 7:
            return (<i className="wi wi-cloudy"></i>);
        case 8:
            // return PackIconWeatherIconsKind.Cloud;
            return (<i className="wi wi-cloud"></i>);
        case 11:
            // return PackIconWeatherIconsKind.Fog;
            return (<i className="wi wi-day-fog"></i>);
        case 12:
            // return PackIconWeatherIconsKind.Showers;
            return (<i className="wi wi-showers"></i>);
        case 13:
        case 14:
            // return PackIconWeatherIconsKind.DayShowers;
            return (<i className="wi wi-day-showers"></i>);
        case 15:
            // return PackIconWeatherIconsKind.Thunderstorm;
            return (<i className="wi wi-thunderstorm"></i>);
        case 16:
        case 17:
            // return PackIconWeatherIconsKind.DayThunderstorm;
            return (<i className="wi wi-day-thunderstorm"></i>);
        case 18:
            // return PackIconWeatherIconsKind.Rain;
            return (<i className="wi wi-rain"></i>);
        case 19:
            // return PackIconWeatherIconsKind.SnowflakeCold;
            return (<i className="wi wi-snowflake-cold"></i>);
        case 20:
        case 21:
        case 23:
            // return PackIconWeatherIconsKind.DaySnow;
            return (<i className="wi wi-day-snow"></i>);
        case 22:
            // return PackIconWeatherIconsKind.Snow;
            return (<i className="wi wi-snow"></i>);
        case 24:
        case 25:
            // return PackIconWeatherIconsKind.Sleet;
            return (<i className="wi wi-sleet"></i>);
        case 26:
        case 29:
            // return PackIconWeatherIconsKind.RainMix;
            return (<i className="wi wi-rain-mix"></i>);
        case 30:
            // return PackIconWeatherIconsKind.Hot;
            return (<i className="wi wi-hot"></i>);
        case 31:
            // return PackIconWeatherIconsKind.Thermometer;
            return (<i className="wi wi-thermometer"></i>);
        case 32:
            // return PackIconWeatherIconsKind.Windy;
            return (<i className="wi wi-windy"></i>);
        case 33:
            // return PackIconWeatherIconsKind.NightClear;
            return (<i className="wi wi-night-clear"></i>);
        case 34:
        case 35:
        case 36:
            // return PackIconWeatherIconsKind.NightPartlyCloudy;
            return (<i className="wi wi-day-cloudy"></i>);
        case 37:
            // return PackIconWeatherIconsKind.NightFog;
            return (<i className="wi wi-night-fog"></i>);
        case 38:
            // return PackIconWeatherIconsKind.NightCloudy;
            return (<i className="wi wi-night-cloudy"></i>);
        case 39:
            // return PackIconWeatherIconsKind.NightShowers;
            return (<i className="wi wi-night-showers"></i>);
        case 40:
            // return PackIconWeatherIconsKind.NightAltShowers;
            return (<i className="wi wi-night-alt-showers"></i>);
        case 41:
            // return PackIconWeatherIconsKind.NightThunderstorm;
            return (<i className="wi wi-night-thunderstorm"></i>);
        case 42:
            // return PackIconWeatherIconsKind.NightAltThunderstorm;
            return (<i className="wi wi-night-alt-thunderstorm"></i>);
        case 43:
            // return PackIconWeatherIconsKind.NightAltSnow;
            return (<i className="wi wi-night-alt-snow"></i>);
        case 44:
            // return PackIconWeatherIconsKind.NightSnow;
            return (<i className="wi wi-night-snow"></i>);
        default:
            return (<i className="wi wi-na"></i>);
    }
}