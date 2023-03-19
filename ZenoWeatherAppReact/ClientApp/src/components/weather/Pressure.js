import React from 'react';

export default function Pressure({pressure, units}) {
    return (
        <div className="col-md-2 currentConditionsGridTile shadow black-shade-2">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="card-title weatherTileIcon"><i className="wi wi-barometer"></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="card-text weatherTileReading">{
                                (units === 'Imperial') ? pressure['Imperial']['Value'].toFixed(1) : pressure['Metric']['Value'].toFixed(0)
                            }</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <p>Pressure ({
                        (units === 'Imperial') ? pressure['Imperial']['Unit'] : pressure['Metric']['Unit']
                    })</p>
                </div>
            </div>
        </div>
    );
}