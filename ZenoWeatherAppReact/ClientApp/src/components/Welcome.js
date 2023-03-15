import React, { Component } from 'react';
import { MContext } from "./MyProvider";
import { Link } from 'react-router-dom';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Welcome.css';

export class Welcome extends Component {
    static displayName = Welcome.name;
    render() {
        return (
            <div>
                <MContext.Consumer>
                      {(context) => (
                          (context.state.apiKey === "") ?
                            <div className="px-4 my-5 text-center">
                                <img className="d-block mx-auto mb-4" id="heroImage" src="/Assets/3dicons/sun-colors.png" width="256" alt=""></img>
                                <h1 className="display-5 fw-bold">Welcome!</h1>
                                <div className="col-lg-6 mx-auto">
                                    <p className="lead mb-4">To get started, enter an AccuWeather API Key on the Settings page and search for a location.</p>
                                    <p className="lead fs-6 opacity-75 mb-4">(No API Key? No problem!<br></br>On the Settings page, turn Demo Mode on.)</p>
                                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                        <Link tag={Link} to="/settings">
                                            <button tag={Link} to="/settings" type="button" className="btn btn-primary btn-lg px-4 gap-3"><FontAwesomeIcon size="lg" icon={faCog} /> Settings</button>                        </Link>
                                    </div>
                                </div>
                            </div>
                            : <p></p>
                      )}
                  </MContext.Consumer>
                  <MContext.Consumer>
                      {(context) => (
                          (context.state.apiKey !== "" && context.state.location === "" && context.state.currentConditions === "") ?
                            <div className="px-4 my-5 text-center">
                                <img className="d-block mx-auto mb-4" id="heroImage" src="/Assets/3dicons/sun.png" width="256" alt=""></img>
                                <h1 className="display-5 fw-bold">Ready for weather!</h1>
                                <div className="col-lg-6 mx-auto">
                                    <p className="lead mb-4">Enter a location in the search area to get the current conditions and forecast.</p>
                                </div>
                            </div>
                            : <p></p>
                      )}
                    </MContext.Consumer>
            </div>

        );
    }
}