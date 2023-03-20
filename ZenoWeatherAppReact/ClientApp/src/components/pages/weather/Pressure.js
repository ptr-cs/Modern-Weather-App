import React from 'react';

export default function Pressure({pressure, units}) {
    return (
        <div className="col-md-2 col-4 currentConditionsGridTile shadow black-shade-2">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="weatherTileIcon"><i className="wi wi-barometer"></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="weatherTileReading">{
                                (units === 'Imperial') ? pressure['Imperial']['Value'].toFixed(1) : pressure['Metric']['Value'].toFixed(0)
                            }</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <h6>Pressure ({
                        (units === 'Imperial') ? pressure['Imperial']['Unit'] : pressure['Metric']['Unit']
                    })</h6>
                </div>
            </div>
        </div>
    );
}