import React from 'react';

export default function WindChill({ windChillTemperature, units }) {
    return (
        <div className="col-md-2 currentConditionsGridTile shadow black-shade-1">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="card-title weatherTileIcon"><i className="wi wi-strong-wind"></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="card-text weatherTileReading">{
                                (units === 'Imperial') ? windChillTemperature['Imperial']['Value'] : windChillTemperature['Metric']['Value']
                            }&deg;</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <p>Wind Chill ({
                        (units === 'Imperial') ? windChillTemperature['Imperial']['Unit'] : windChillTemperature['Metric']['Unit']
                    })</p>
                </div>
            </div>
        </div>
    );
}