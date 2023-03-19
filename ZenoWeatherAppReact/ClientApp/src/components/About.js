import React from 'react';

export default function About() {

    return (
        <div className="px-4 my-5 text-center">
            <img className="d-block mx-auto mb-4" id="heroImage" src="/Assets/3dicons/umbrella.png" width="256" alt=""></img>
            <h1 className="display-5 fw-bold">About</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Multi-platform weather app implemented using Windows Presentation Foundation (WPF) and ASP.NET Core / React JS. Data is provided by the AccuWeather API and supports Free-tier access. Source code is available on <a href="https://github.com/DivideByZeno/Zeno-Weather-App" title="Zeno Weather App">GitHub.</a></p>
            </div>
        </div>
    );
}
