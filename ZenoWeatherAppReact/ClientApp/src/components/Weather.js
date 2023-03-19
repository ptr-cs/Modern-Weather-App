import React from 'react';
import CurrentConditions from './weather/CurrentConditions';
import WindSpeed from './weather/WindSpeed';
import CloudCover from './weather/CloudCover';
import Visibility from './weather/Visibility';
import Pressure from './weather/Pressure';
import Temperature from './weather/Temperature';
import RelativeHumidity from './weather/RelativeHumidity';
import WindDirection from './weather/WindDirection';
import PastPrecipitation from './weather/PastPrecipitation';
import WindChill from './weather/WindChill';
import ForecastDay from './weather/ForecastDay';
import ForecastSummary from './weather/ForecastSummary';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Weather({ state }) {

    function getFormattedDateTime(value) {
        var date = new Date(value).toLocaleString()
        return date;
    }

    return (
        <div >
            {(state.location !== '') ?
                <div className="bd-example-row container-fluid container-lg bg-primary mt-3 p-1 shadow"> 
                    <h2 className="fs-4 text-light m-0 p-1" style={{display: 'inline-block'}}>{JSON.parse(state.location)['LocalizedName']}, {JSON.parse(state.location)['AdministrativeArea']['ID']}</h2>
                    <p className="lh-1 text-secondary-emphasis mb-2 small ms-2 text-light p-1" style={{ display: 'inline-block' }}><FontAwesomeIcon className="me-1" size="x1" icon={faClock} /> {getFormattedDateTime(JSON.parse(state.currentConditions)['LocalObservationDateTime'])}</p>
                </div>
                 :  <p></p>
            } 

            { (state.currentConditions !== '') ?
                <div className="bd-example-row container-fluid p-0 m-0 pageParentDivIndex" id="forecastContainer" style={{ overflowY: 'hidden' }}>
                    <div className="container-lg" >
                        <div className="row forecastRow">
                            <CurrentConditions
                                weatherText={JSON.parse(state.currentConditions)['WeatherText']}
                                weatherIcon={JSON.parse(state.currentConditions)['WeatherIcon']}/>

                            <Temperature temperature={JSON.parse(state.currentConditions)['Temperature']} units={state.unitsSystem} />
                            <WindSpeed windSpeed={JSON.parse(state.currentConditions)['Wind']['Speed']} units={state.unitsSystem} />
                            <WindChill windChillTemperature={JSON.parse(state.currentConditions)['WindChillTemperature']} units={state.unitsSystem} />
                            <WindDirection windDirection={JSON.parse(state.currentConditions)['Wind']['Direction']} />

                        </div>

                        <div className="row forecastRow shadow">
                            <CloudCover cloudCover={JSON.parse(state.currentConditions)['CloudCover']} />
                            <Visibility visibility={JSON.parse(state.currentConditions)['Visibility']} units={state.unitsSystem} />
                            <Pressure pressure={JSON.parse(state.currentConditions)['Pressure']} units={state.unitsSystem} />
                            <RelativeHumidity relativeHumidity={JSON.parse(state.currentConditions)['RelativeHumidity']} />
                            <PastPrecipitation precipitationSummary={JSON.parse(state.currentConditions)['PrecipitationSummary']} units={state.unitsSystem} />
                        </div>
                    </div>
                </div>
                : <p></p>
            }

            { (state.forecast5Day !== '') ? 
                <div className="bd-example-row mt-3 mb-3">
                    <div className="bd-example">
                        <div className="container-lg">
                            <div className="row forecastRow shadow">
                                <ForecastSummary headlineText={JSON.parse(state.forecast5Day)['Headline']['Text']} />
                                <ForecastDay
                                    date={JSON.parse(state.forecast5Day)['DailyForecasts'][0]['Date']}
                                    temperature={JSON.parse(state.forecast5Day)['DailyForecasts'][0]['Temperature']}
                                    day={JSON.parse(state.forecast5Day)['DailyForecasts'][0]['Day']}
                                    units={state.unitsSystem}
                                    shading="black-shade-2" />
                                <ForecastDay
                                    date={JSON.parse(state.forecast5Day)['DailyForecasts'][1]['Date']}
                                    temperature={JSON.parse(state.forecast5Day)['DailyForecasts'][1]['Temperature']}
                                    day={JSON.parse(state.forecast5Day)['DailyForecasts'][1]['Day']}
                                    units={state.unitsSystem}
                                    shading="black-shade-3" />
                                <ForecastDay
                                    date={JSON.parse(state.forecast5Day)['DailyForecasts'][2]['Date']}
                                    temperature={JSON.parse(state.forecast5Day)['DailyForecasts'][2]['Temperature']}
                                    day={JSON.parse(state.forecast5Day)['DailyForecasts'][2]['Day']}
                                    units={state.unitsSystem}
                                    shading="black-shade-4" />
                                <ForecastDay
                                    date={JSON.parse(state.forecast5Day)['DailyForecasts'][3]['Date']}
                                    temperature={JSON.parse(state.forecast5Day)['DailyForecasts'][3]['Temperature']}
                                    day={JSON.parse(state.forecast5Day)['DailyForecasts'][3]['Day']}
                                    units={state.unitsSystem}
                                    shading="black-shade-5" />
                                <ForecastDay
                                    date={JSON.parse(state.forecast5Day)['DailyForecasts'][4]['Date']}
                                    temperature={JSON.parse(state.forecast5Day)['DailyForecasts'][4]['Temperature']}
                                    day={JSON.parse(state.forecast5Day)['DailyForecasts'][4]['Day']}
                                    units={state.unitsSystem}
                                    shading="black-shade-6" />
                            </div>
                        </div>
                    </div>
                </div> 
                : <p></p>
        }
        </div>
    );
}
