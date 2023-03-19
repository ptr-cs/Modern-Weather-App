import React from 'react';

export default function WindDirection({windDirection}) {
    return (
        <div className="col-md-2 currentConditionsGridTile shadow black-shade-2">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="card-title weatherTileIcon"><i className="wi wi-wind-direction" style={{ rotate: `${windDirection['Degrees']}deg` }}></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="card-text weatherTileReading">{windDirection['Degrees']}&deg;</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <p>Wind Dir. ({windDirection['Localized']})</p>
                </div>
            </div>
        </div>
    );
}