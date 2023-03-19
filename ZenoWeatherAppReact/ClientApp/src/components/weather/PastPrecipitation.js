import React from 'react';
import './PastPrecipitation.css';

export default function PastPrecipitation({ precipitationSummary, units }) {
    return (
        <div className="col-md-4 currentConditionsGridTile shadow pastPrecipitationSummary">
            <div className="h-100">
                <div className="row g-0 weatherRow h-25">
                    <div className="col-2 black-shade-1 h-100 p-0">
                        <div className="border-bottom d-flex h-25" />
                    </div>
                    <div className="col-2 black-shade-2 h-100 p-0">
                        <div className="border-bottom d-flex h-50" />
                    </div>
                    <div className="col-2 black-shade-3 h-100 p-0">
                        <div className="border-bottom d-flex h-75" />
                    </div>
                    <div className="col-2 black-shade-4 h-100 p-0">
                        <div className="border-bottom d-flex h-100" />
                    </div>
                    <div className="col-2 black-shade-5 h-100 p-0">
                        <div className="border-bottom d-flex h-100" />
                    </div>
                    <div className="col-2 black-shade-6 h-100 p-0">
                        <div className="border-bottom d-flex h-100" />
                    </div>
                </div>
                <div className="row g-0 mt-1 weatherRow">
                    <p className="col-2 lh-1 p-0 m-0 text-light small text-center">{
                        (units === 'Imperial') ? precipitationSummary['PastHour']['Imperial']['Value'].toFixed(1) : precipitationSummary['PastHour']['Metric']['Value'].toFixed(0)
                    }</p>
                    <p className="col-2 lh-1 p-0 m-0 text-light small text-center">{
                        (units === 'Imperial') ? precipitationSummary['Past3Hours']['Imperial']['Value'].toFixed(1) : precipitationSummary['Past3Hours']['Metric']['Value'].toFixed(0)
                    }</p>
                    <p className="col-2 lh-1 p-0 m-0 text-light small text-center">{
                        (units === 'Imperial') ? precipitationSummary['Past6Hours']['Imperial']['Value'].toFixed(1) : precipitationSummary['Past6Hours']['Metric']['Value'].toFixed(0)
                    }</p>
                    <p className="col-2 lh-1 p-0 m-0 text-light small text-center">{
                        (units === 'Imperial') ? precipitationSummary['Past9Hours']['Imperial']['Value'].toFixed(1) : precipitationSummary['Past9Hours']['Metric']['Value'].toFixed(0)
                    }</p>
                    <p className="col-2 lh-1 p-0 m-0 text-light small text-center">{
                        (units === 'Imperial') ? precipitationSummary['Past12Hours']['Imperial']['Value'].toFixed(1) : precipitationSummary['Past12Hours']['Metric']['Value'].toFixed(0)
                    }</p>
                    <p className="col-2 lh-1 p-0 m-0 text-light small text-center">{
                        (units === 'Imperial') ? precipitationSummary['Past18Hours']['Imperial']['Value'].toFixed(1) : precipitationSummary['Past18Hours']['Metric']['Value'].toFixed(0)
                    }</p>
                </div>
                <div className="row g-0 weatherTileTitle pastPrecipitationSummaryText">
                    <p className="d-inline"><i className="fs-2 me-2 wi wi-rain"></i> Past Precip. Summary ({
                        (units === 'Imperial') ? precipitationSummary['Precipitation']['Imperial']['Unit'] : precipitationSummary['Precipitation']['Metric']['Unit']
                    })</p>
                </div>
            </div>
        </div>
    );
}