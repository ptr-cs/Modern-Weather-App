import React from 'react';

export default function Visibility({visibility, units}) {
    return (
        <div className="col-md-2 col-4 currentConditionsGridTile shadow black-shade-1">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="weatherTileIcon"><i className="wi wi-horizon-alt"></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="weatherTileReading">{
                                (units === 'Imperial') ? visibility['Imperial']['Value'] : visibility['Metric']['Value']
                            }</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <h6>Visibility ({
                        (units === 'Imperial') ? visibility['Imperial']['Unit'] : visibility['Metric']['Unit']
                    })</h6>
                </div>
            </div>
        </div>
    );
}