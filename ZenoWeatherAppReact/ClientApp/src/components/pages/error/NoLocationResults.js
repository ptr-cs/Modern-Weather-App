import React from 'react';

export default function NoLocationResults({ state }) {
    return (
        <div className="px-4 my-5 text-center">
            <div className="d-block mb-4" id="headerImageContainer" style={{ height: 250 + 'px' }}>
                <img className="" id="umbrellaColor" src="/Assets/3dicons/thumbs-down.png" width="256" alt=""></img>
            </div>
            <h1 className="display-5 fw-bold">Location not found</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Could not find a matching location. Please try a different location.</p>
            </div>
        </div>
    );
}