import React from 'react';

export default function CloudCover({ cloudCover }) {
    return (
        <div className="col-md-2 currentConditionsGridTile shadow black-shade-3">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="card-title weatherTileIcon"><i className="wi wi-cloudy"></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="card-text weatherTileReading">{cloudCover}%</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <p>Cloud Cover</p>
                </div>
            </div>
        </div>
    );
}