import React, { useState } from 'react';
import { MContext } from "./MyProvider";
import { Link, Navigate } from 'react-router-dom';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Welcome.css';

export default function Welcome({ state }) {

    return (
        <div className="px-4 my-5">
            <img className="d-block mx-auto mb-4" id="heroImage" src="/Assets/3dicons/sun.png" width="256" alt=""></img>
            {state.apiKey === '' ? <div className="text-center">
                
                <h1 className="display-5 fw-bold">Welcome!</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">To get started, enter an AccuWeather API Key on the Settings page and search for a location.</p>
                    <p className="lead fs-6 opacity-75 mb-4">(No API Key? No problem!<br></br>On the Settings page, switch Demo Mode on)</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link tag={Link} to="/settings">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3"><FontAwesomeIcon size="lg" icon={faCog} /> Settings</button>
                        </Link>
                    </div>
                </div>
            </div> : <p></p>}

            {
                (state.apiKey !== "" && state.location === "" && state.currentConditions === "") ?
                    <div className="text-center">
                        <h1 className="display-5 fw-bold">Ready for weather!</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">Enter a location in the search area to get the weather.</p>
                        </div>
                    </div>
                    : <p></p>
            }
        </div>
    )
}