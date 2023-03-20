import React from 'react';

export default function WindDirection({windDirection}) {
    return (
        <div className="col-md-2 col-4 currentConditionsGridTile shadow black-shade-2">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="weatherTileIcon"><i className="wi wi-wind-direction" style={{ rotate: `${windDirection['Degrees']}deg` }}></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="weatherTileReading">{windDirection['Degrees']}&deg;</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <h6>Wind Dir. ({windDirection['Localized']})</h6>
                </div>
            </div>
        </div>
    );
}