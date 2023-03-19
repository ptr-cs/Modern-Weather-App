import React, { useState } from 'react';

import WeatherIconMapper from './WeatherIconMapper';

export default function CurrentConditions({ weatherText, weatherIcon }) {

    return (
        <div className="col-md-4 currentConditionsGridTile shadow">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="card-title weatherTileIcon"><WeatherIconMapper weatherIcon={ weatherIcon } /></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div>
                            <p className="card-text weatherTileReading">{ weatherText }</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <p className="mb-0">Current Conditions</p>
                </div>
            </div>
        </div>
    );
}