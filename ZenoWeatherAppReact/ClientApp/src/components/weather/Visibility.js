import React from 'react';

export default function Visibility({visibility, units}) {
    return (
        <div className="col-md-2 currentConditionsGridTile shadow black-shade-1">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="card-title weatherTileIcon"><i className="wi wi-horizon-alt"></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="card-text weatherTileReading">{
                                (units === 'Imperial') ? visibility['Imperial']['Value'] : visibility['Metric']['Value']
                            }</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <p>Visibility ({
                        (units === 'Imperial') ? visibility['Imperial']['Unit'] : visibility['Metric']['Unit']
                    })</p>
                </div>
            </div>
        </div>
    );
}