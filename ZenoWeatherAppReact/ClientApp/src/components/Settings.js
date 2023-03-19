﻿import React from 'react';
import { Form, FormGroup, Label, UncontrolledTooltip } from 'reactstrap';
import $ from 'jquery';
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Settings.css'

export default function Settings({ state }) {

    function handleImperialChange(e) {
        if (e.target.value === 'on')
            state.setUnitsSystem('Imperial')
    }

    function handleMetricChange(e) {
        if (e.target.value === 'on')
            state.setUnitsSystem('Metric')
    }

    return (
        <div>
            <div className="d-block pageParentDiv" id="settingsContainer">

                <div className="d-inline-block">
                    <div className="form-check form-switch d-inline-block settingsDiv">
                        <label className="form-check-label settingsPageLabel" htmlFor="flexSwitchCheckChecked">Demo Mode:</label>
                        <input className="form-check-input largeToggleSwitch" type="checkbox" role="switch" id="flexSwitchCheckChecked"></input>
                    </div>
                    <FontAwesomeIcon id="settingsInfoIcon" size="lg" icon={faQuestionCircle} />
                    <UncontrolledTooltip
                        placement="bottom"
                        target="settingsInfoIcon"
                    >Demo Mode uses fake data for the weather information (no API Key required).
                    </UncontrolledTooltip>
                </div>
                <div className="settingsDiv">
                    <p className="settingsPageLabel">Data Provider:</p>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle disabled" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            AccuWeather
                        </button>
                        {/*<ul className="dropdown-menu">*/}
                        {/*    <li><a className="dropdown-item" href="#">AccuWeather</a></li>*/}
                        {/*    <li><a className="dropdown-item" href="#">Demo Mode</a></li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
                <Form>
                    <FormGroup className="settingsDiv">
                        <Label className="settingsPageLabel">API Key:</Label>
                        <input type="password" defaultValue={state.apiKey} className="form-control" id="exampleInputPassword1"
                            placeholder="API Key" runat="server" style={{ maxWidth: 420 + 'px' }} onKeyUp={() => state.setApiKey($('#exampleInputPassword1').val())}></input>
                    </FormGroup>
                </Form>
                <div className="settingsDiv">

                    <p className="settingsPageLabel">Units:</p>
                    <fieldset>
                        <div className="form-check">
                            <input type="radio" name="radios" className="form-check-input" id="imperialRadio" defaultChecked={(state.unitsSystem === 'Imperial') ? true : false} onChange={(e) => handleImperialChange(e)}></input>
                            <label className="form-check-label" htmlFor="untisRadio1">Imperial</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="radios" className="form-check-input" id="metricRadio" defaultChecked={(state.unitsSystem === 'Metric') ? true : false} onChange={(e) => handleMetricChange(e)}></input>
                            <label className="form-check-label" htmlFor="untisRadio2">Metric</label>
                        </div>
                    </fieldset>
                </div>
                <div className="d-inline-flex">
                    <div className="settingsDiv">
                        <p className="settingsPageLabel">Theme:</p>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Light
                            </button>
                            {/*<ul className="dropdown-menu" >*/}
                            {/*    <li><a className="dropdown-item" href="#">Light</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Dark</a></li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                    <div className="settingsDiv">
                        <p className="settingsPageLabel">Accent:</p>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blue
                            </button>
                            {/*<ul className="dropdown-menu" >*/}
                            {/*    <li><a className="dropdown-item" href="#">Blue</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Red</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Green</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Yellow</a></li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </div>
            </div>

            <img title="Settings image decoration" id="settingsPageImage" src="./Assets/3dicons/gear-desat.png" alt=""></img>
        </div>
    );
}
