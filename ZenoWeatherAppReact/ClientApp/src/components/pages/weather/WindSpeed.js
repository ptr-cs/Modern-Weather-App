import React from 'react';

export default function WindSpeed({ windSpeed, units }) {
    return (
        <div className="col-md-2 col-4 currentConditionsGridTile shadow black-shade-2">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="weatherTileIcon"><i className="wi wi-windy"></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="weatherTileReading">{
                                (units === 'Imperial') ? windSpeed['Imperial']['Value'] : windSpeed['Metric']['Value']
                            }</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <h6>Wind Speed ({(units === 'Imperial') ? windSpeed['Imperial']['Unit'] : windSpeed['Metric']['Unit']})</h6>
                </div>
            </div>
        </div>
    );
}