import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer className="footer mt-auto py-3 bg-dark">
                <div className="d-flex justify-content-between">
                    <p id="weatherProvidedBy">
                        Weather Data<br />Provided by:
                    </p>
                </div>
                <a href="https:www.accuweather.com/" target="_blank" title="Visit https:www.accuweather.com/" role="button" className="d-flex bg-transparent me-2" style={{ alignSelf: "center" }} aria-current="true">
                    <img src="/Assets/AccuWeather Light.png" alt="twbs" height="16" className="img-responsive center-block flex-shrink-0" ></img>
                </a>
            </footer>
        );
    }
}
