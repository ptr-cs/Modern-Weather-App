import React from 'react';

export default function Temperature({ temperature, units }) {
    return (
        <div className="col-md-2 col-4 currentConditionsGridTile shadow black-shade-1">
            <div>
                <div className="row g-0 weatherRow">
                    <div className="col-lg-6 col-sm-12 col-6">
                        <h5 className="weatherTileIcon"><i className="wi wi-thermometer"></i></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-6">
                        <div> 
                            <p className="weatherTileReading">{
                                (units === 'Imperial') ? temperature['Imperial']['Value'] : temperature['Metric']['Value']
                            }&deg;</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 weatherTileTitle">
                    <h6>Temp. ({
                        (units === 'Imperial') ? temperature['Imperial']['Unit'] : temperature['Metric']['Unit']
                    })</h6>
                </div>
            </div>
        </div>
    );
}