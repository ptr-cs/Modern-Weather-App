import React from 'react';

export default function ForecastSummary({ headlineText }) {
    return (
        <div className="col-md-2 col-4 forecastGridTile shadow p-0">
            <div className="card-body">
                <h4 className="card-title forecastTileTitle p-2 black-shade-1">Forecast</h4>
                <p className="card-text lh-sm text-light p-2">{headlineText}</p>
            </div>
        </div>
    );
}