import React, { Component, useState } from 'react';
import { MContext } from "./MyProvider";

export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (



          <div className="d-flex">

              {/*<p>Current api Key is: </p>*/}
              {/*<div>*/}
              {/*    <MContext.Consumer>*/}
              {/*        {(context) => (<p>{context.state.apiKey}</p>)}*/}
              {/*    </MContext.Consumer>*/}
              {/*</div>*/}

            <div className="bd-example-row container-fluid pageParentDivIndex" id="forecastContainer">
                <div className="container-lg shadow " style={{paddingTop: 8 + 'px'}}>
                    <div className="row forecastRow">
                        <div className="col-md-4 currentConditionsGridTile shadow">
                            <div>
                                <div className="row g-0 weatherRow">
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <h5 className="card-title weatherTileIcon"><i className="wi wi-night-sleet"></i></h5>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <div>
                                            <p className="card-text weatherTileReading">100%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 weatherTileTitle">
                                    <p>Current Conditions</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 currentConditionsGridTile shadow black-shade-2">
                            <div>
                                <div className="row g-0 weatherRow">
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <h5 className="card-title weatherTileIcon"><i className="wi wi-windy"></i></h5>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <div>
                                            <p className="card-text weatherTileReading">14.5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 weatherTileTitle">
                                    <p>Wind Speed (mi/h)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 currentConditionsGridTile shadow black-shade-3">
                            <div>
                                <div className="row g-0 weatherRow">
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <h5 className="card-title weatherTileIcon"><i className="wi wi-cloudy"></i></h5>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <div>
                                            <p className="card-text weatherTileReading">100%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 weatherTileTitle">
                                    <p>Cloud Cover</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 currentConditionsGridTile shadow black-shade-1">
                            <div>
                                <div className="row g-0 weatherRow">
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <h5 className="card-title weatherTileIcon"><i className="wi wi-horizon-alt"></i></h5>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <div>
                                            <p className="card-text weatherTileReading">8</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 weatherTileTitle">
                                    <p>Visibility (mi)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 currentConditionsGridTile shadow black-shade-2">
                            <div>
                                <div className="row g-0 weatherRow">
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <h5 className="card-title weatherTileIcon"><i className="wi wi-barometer"></i></h5>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <div>
                                            <p className="card-text weatherTileReading">30.14</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 weatherTileTitle">
                                    <p>Pressure (inHg)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 currentConditionsGridTile shadow black-shade-1">
                            <div>
                                <div className="row g-0 weatherRow">
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <h5 className="card-title weatherTileIcon"><i className="wi wi-thermometer"></i></h5>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <div>
                                            <p className="card-text weatherTileReading">90</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 weatherTileTitle">
                                    <p>Temp. (F)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 currentConditionsGridTile shadow black-shade-3">
                            <div>
                                <div className="row g-0 weatherRow">
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <h5 className="card-title weatherTileIcon"><i className="wi wi-humidity"></i></h5>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <div>
                                            <p className="card-text weatherTileReading">14.5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 weatherTileTitle">
                                    <p>Rel. Humidity</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 currentConditionsGridTile shadow black-shade-2">
                            <div>
                                <div className="row g-0 weatherRow">
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <h5 className="card-title weatherTileIcon"><i className="wi wi-wind-direction"></i></h5>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <div>
                                            <p className="card-text weatherTileReading">14.5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 weatherTileTitle">
                                    <p>Wind Dir. (ENE)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 currentConditionsGridTile shadow">
                            <div>
                                <div className="row g-0 weatherRow">
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <h5 className="card-title weatherTileIcon"><i className="wi wi-rain"></i></h5>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <div>
                                            <p className="card-text weatherTileReading">14.5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 weatherTileTitle">
                                    <p>Past Precip. Summary (in)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 currentConditionsGridTile shadow black-shade-1">
                            <div>
                                <div className="row g-0 weatherRow">
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <h5 className="card-title weatherTileIcon"><i className="wi wi-snowflake-cold"></i></h5>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-6">
                                        <div>
                                            <p className="card-text weatherTileReading">14.5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 weatherTileTitle">
                                    <p>Wind Chill (F)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bd-example-row mt-3 mb-3">
                    <div className="bd-example">
                        <div className="container-lg">
                            <div className="row forecastRow">
                                <div className="col-md-2 forecastGridTile shadow p-0">
                                    <div className="card-body">
                                        <h5 className="card-title forecastTileTitle p-2 black-shade-1">Forecast</h5>
                                        <p className="card-text forecastTileText p-2">Rain and thunderstorms this evening through tomorrow morning</p>
                                    </div>
                                </div>
                                <div className="col-md-2 forecastGridTile shadow black-shade-1">
                                    <div className="card-body forecastCardBody">
                                        <h5 className="card-title forecastCardTitle"><i className="wi wi-day-sunny"></i></h5>
                                        <div>
                                            <h6 className="card-subtitle forecastCardSummary">Sunny</h6>
                                            <p className="card-text forecastCardTemp">40&deg; / 76&deg;</p>
                                            <span className="card-link">Mon</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 forecastGridTile shadow black-shade-2">
                                    <div className="card-body forecastCardBody">
                                        <h5 className="card-title forecastCardTitle"><i className="wi wi-day-rain"></i></h5>
                                        <div>
                                            <h6 className="card-subtitle forecastCardSummary">Rainy</h6>
                                            <p className="card-text forecastCardTemp">36&deg; / 62&deg;</p>
                                            <span className="card-link">Tue</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 forecastGridTile shadow black-shade-3">
                                    <div className="card-body forecastCardBody">
                                        <h5 className="card-title forecastCardTitle"><i className="wi wi-day-snow"></i></h5>
                                        <div>
                                            <h6 className="card-subtitle forecastCardSummary">Snow showers</h6>
                                            <p className="card-text forecastCardTemp">28&deg; / 47&deg;</p>
                                            <span className="card-link">Wed</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 forecastGridTile shadow black-shade-4">
                                    <div className="card-body forecastCardBody">
                                        <h5 className="card-title forecastCardTitle"><i className="wi wi-cloudy-gusts"></i></h5>
                                        <div>
                                            <h6 className="card-subtitle forecastCardSummary">Overcast and windy</h6>
                                            <p className="card-text forecastCardTemp">43&deg; / 57&deg;</p>
                                            <span className="card-link">Thu</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 forecastGridTile shadow black-shade-5">
                                    <div className="card-body forecastCardBody">
                                        <h5 className="card-title forecastCardTitle"><i className="wi wi-storm-showers"></i></h5>
                                        <div>
                                            <h6 className="card-subtitle forecastCardSummary">Thunderstorms</h6>
                                            <p className="card-text forecastCardTemp">61&deg; / 80&deg;</p>
                                            <span className="card-link">Fri</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
  }
}
