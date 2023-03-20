import React from 'react';
import { Link } from 'react-router-dom';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Welcome.css';
import $ from 'jquery'

export default function Welcome({ state }) {

    $(document).ready(function () {
        fadeSunOnLoad();

        $('#sunDesat').hover(function () {
            $('#sunRegular').stop(true, true).fadeOut({ duration: 250});
        }, function () {
            $('#sunRegular').stop(true, true).fadeIn({ duration: 250 });
        });

        $('#sunDesat').mousedown(function () {
            $("#sunColor").stop(true, true).animate({ width: 240 }, { duration: 200 }, { easein: 'easeout' });
            $("#sunRegular").stop(true, true).animate({ width: 240 }, { duration: 200 }, { easein: 'easeout' });
            $("#sunDesat").stop(true, true).animate({ width: 240 }, { duration: 200 }, { easein: 'easeout' });
        });

        $('#sunDesat').mouseup(function () {
            $("#sunColor").stop(true, true).animate({ width: 256 }, { duration: 200 }, { easein: 'easein' });
            $("#sunRegular").stop(true, true).animate({ width: 256 }, { duration: 200 }, { easein: 'easein' });
            $("#sunDesat").stop(true, true).animate({ width: 256 }, { duration: 200 }, { easein: 'easein' });
        });
    });

    function fadeSunOnLoad() {
        $('#sunDesat').animate({ opacity: 0.0 }, { duration: 350 }, { easing: "easeout" });
    }

    return (
        <div className="px-4 my-5">
            <div className="d-block mb-4 position-relative" id="headerImageContainer" style={{ height: 250 + 'px' }}>
                <img className="start-0 position-absolute translate-middle top-20 start-50 mt-5" id="sunColor" src="/Assets/3dicons/sun-colors.png" width="256" alt=""></img>
                <img className="start-0 position-absolute translate-middle top-20 start-50 mt-5" id="sunRegular" src="/Assets/3dicons/sun.png" width="256" alt=""></img>
                <img className="start-0 position-absolute translate-middle top-20 start-50 mt-5" id="sunDesat" src="/Assets/3dicons/sun-desat.png" width="256" alt=""></img>
            </div>
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
                (state.apiKey !== "" && state.location === "") ?
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