import React from 'react';

export default function ForecastSummary({ headlineText }) {
    return (
        <div className="col-md-2 forecastGridTile shadow p-0">
            <div className="card-body">
                <h5 className="card-title forecastTileTitle p-2 black-shade-1">Forecast</h5>
                <p className="card-text lh-sm text-light p-2 small">{headlineText}</p>
            </div>
        </div>
    );
}