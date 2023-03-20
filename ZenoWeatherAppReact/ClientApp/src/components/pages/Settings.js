import React from 'react';
import { Form, FormGroup, Label, UncontrolledTooltip } from 'reactstrap';
import $ from 'jquery';
import { faQuestionCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
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

    $(document).ready(function () {
        fadegearOnLoad();

        $('#gearDesat').hover(function () {
            $('#gearRegular').stop(true, true).fadeOut({ duration: 250 });
        }, function () {
            $('#gearRegular').stop(true, true).fadeIn({ duration: 250 });
        });

        $('#gearDesat').mousedown(function () {
            $("#gearColor").stop(true, true).animate({ width: 240 }, { duration: 200 }, { easein: 'easeout' });
            $("#gearRegular").stop(true, true).animate({ width: 240 }, { duration: 200 }, { easein: 'easeout' });
            $("#gearDesat").stop(true, true).animate({ width: 240 }, { duration: 200 }, { easein: 'easeout' });
        });

        $('#gearDesat').mouseup(function () {
            $("#gearColor").stop(true, true).animate({ width: 256 }, { duration: 200 }, { easein: 'easein' });
            $("#gearRegular").stop(true, true).animate({ width: 256 }, { duration: 200 }, { easein: 'easein' });
            $("#gearDesat").stop(true, true).animate({ width: 256 }, { duration: 200 }, { easein: 'easein' });
        });
    });

    function fadegearOnLoad() {
        $('#gearDesat').animate({ opacity: 0.0 }, { duration: 350 }, { easing: "easeout" });
    }

    return (
        <div>
            <div className="d-block pageParentDiv" id="settingsContainer">

                <div className="d-inline-block">
                    <div className="form-check form-switch d-inline-block settingsDiv">
                        <label className="form-check-label settingsPageLabel" htmlFor="flexSwitchCheckChecked">Demo Mode:</label>
                        <input className="form-check-input largeToggleSwitch" type="checkbox" role="switch" disabled id="flexSwitchCheckChecked"></input>
                    </div>
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon id="settingsInfoIcon" size="lg" icon={faCircle} style={{ color: 'white'}} />
                        <FontAwesomeIcon id="settingsInfoIcon" size="lg" icon={faQuestionCircle} />
                    </span>

                    <UncontrolledTooltip
                        placement="bottom"
                        target="settingsInfoIcon"
                    >Demo Mode uses fake data for the weather information (no API Key required). WORK IN PROGRESS
                    </UncontrolledTooltip>
                </div>
                {/*<div className="settingsDiv">*/}
                {/*    <p className="settingsPageLabel">Data Provider:</p>*/}
                {/*    <div className="dropdown">*/}
                {/*        <button className="btn btn-secondary dropdown-toggle disabled" type="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
                {/*            AccuWeather*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
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
                {/*<div className="d-inline-flex">*/}
                {/*    <div className="settingsDiv">*/}
                {/*        <p className="settingsPageLabel">Theme:</p>*/}
                {/*        <div className="dropdown">*/}
                {/*            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
                {/*                Light*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="settingsDiv">*/}
                {/*        <p className="settingsPageLabel">Accent:</p>*/}
                {/*        <div className="dropdown">*/}
                {/*            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
                {/*                Blue*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className="mb-4" id="headerImageContainer">
                <img className="start-0 position-fixed top-25 mt-5 start-100 bottom-0" style={{ marginLeft: -150 + 'px' }} id="gearColor" src="/Assets/3dicons/gear-colors.png" width="256" alt=""></img>
                <img className="start-0 position-fixed top-25 mt-5 start-100 bottom-0" style={{ marginLeft: -150 + 'px' }} id="gearRegular" src="/Assets/3dicons/gear.png" width="256" alt=""></img>
                <img className="start-0 position-fixed top-25 mt-5 start-100 bottom-0" style={{ marginLeft: -150 + 'px' }} id="gearDesat" src="/Assets/3dicons/gear-desat.png" width="256" alt=""></img>
            </div>
        </div>
    );
}
