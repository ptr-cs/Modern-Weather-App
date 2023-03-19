import React from 'react';
import WeatherIconMapper from './WeatherIconMapper';

export default function ForecastDay({ date, temperature, day, shading, units }) {
    var className = 'col-md-2 forecastGridTile shadow ' + shading;

    function dateToWeekDay() {
        var day = new Date(date)
        return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(day)
    }

    function getUnits() {
        return (units === 'Imperial') ? 'F' : 'C';
    }

    function getTempForUnits(temperature, tempUnit) {
        if (units === 'Imperial') {
            if (tempUnit === 'F')
                return temperature.toFixed(0);
            else if (tempUnit === 'C')
                return ((temperature * 9) / 5 + 32).toFixed(0);
        } else if (units === 'Metric') {
            if (tempUnit === 'C')
                return temperature.toFixed(0);
            else if (tempUnit === 'F')
                return ((temperature - 32) * 5 / 9).toFixed(0);
        }
    }

    return (
        <div className={className}>
            <div className="card-body forecastCardBody">
                <h5 className="card-title forecastCardTitle"><WeatherIconMapper weatherIcon={day['Icon']} /></h5>
                <div>
                    <h6 className="card-subtitle forecastCardSummary">{day['IconPhrase']}</h6>
                    <p className="card-text forecastCardTemp">{getTempForUnits(temperature['Minimum']['Value'], temperature['Minimum']['Unit'])} &deg; / {getTempForUnits(temperature['Maximum']['Value'], temperature['Maximum']['Unit'])}&deg; {getUnits()}</p>
                    <span className="card-link">{dateToWeekDay()}</span>
                </div>
            </div>
        </div>
    );
}