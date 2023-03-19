import React from 'react';

export default function RelativeHumidity({relativeHumidity}) {
    return (
        <div className="col-md-2 currentConditionsGridTile shadow black-shade-3">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="card-title weatherTileIcon"><i className="wi wi-humidity"></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="card-text weatherTileReading">{relativeHumidity}</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <p>Rel. Humidity</p>
                </div>
            </div>
        </div>
    );
}