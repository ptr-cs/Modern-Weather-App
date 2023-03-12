import React, { Component } from 'react';
import { Form, FormGroup, Label, UncontrolledTooltip } from 'reactstrap';
import $ from 'jquery';
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MContext } from "./MyProvider";

export class Settings extends Component {
    static displayName = Settings.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-block pageParentDiv" id="settingsContainer">
                <div>
                    {/*<MContext.Consumer>*/}
                    {/*    {(context) => ( <p>{context.state.apiKey}</p>)}*/}
                    {/*</MContext.Consumer>*/}
                </div>

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
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">AccuWeather</a></li>
                            <li><a className="dropdown-item" href="#">Demo Mode</a></li>
                        </ul>
                    </div>
                </div>
                <Form>
                    <FormGroup className="settingsDiv">
                        <Label className="settingsPageLabel">API Key:</Label>
                        <MContext.Consumer>
                            {(context) => (<input type="password" defaultValue={context.state.apiKey} className="form-control" id="exampleInputPassword1"
                                placeholder="API Key" runat="server" style={{ maxWidth: 320 + 'px' }} onKeyUp={() => context.setApiKey($('#exampleInputPassword1').val())}></input>)}
                        </MContext.Consumer>
                    </FormGroup>
                </Form>
                <div className="settingsDiv">

                    <p className="settingsPageLabel">Units:</p>
                    <fieldset>
                        <div className="form-check">
                            <input type="radio" name="radios" className="form-check-input" id="exampleRadio1"></input>
                            <label className="form-check-label" htmlFor="untisRadio1">Imperial</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"></input>
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
                            <ul className="dropdown-menu" >
                                <li><a className="dropdown-item" href="#">Light</a></li>
                                <li><a className="dropdown-item" href="#">Dark</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="settingsDiv">
                        <p className="settingsPageLabel">Accent:</p>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blue
                            </button>
                            <ul className="dropdown-menu" >
                                <li><a className="dropdown-item" href="#">Blue</a></li>
                                <li><a className="dropdown-item" href="#">Red</a></li>
                                <li><a className="dropdown-item" href="#">Green</a></li>
                                <li><a className="dropdown-item" href="#">Yellow</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
