import React from 'react';
import $ from 'jquery'

export default function About() {

    $(document).ready(function () {
        fadeumbrellaOnLoad();

        $('#umbrellaDesat').hover(function () {
            $('#umbrellaRegular').stop(true, true).fadeOut({ duration: 250 });
        }, function () {
            $('#umbrellaRegular').stop(true, true).fadeIn({ duration: 250 });
        });

        $('#umbrellaDesat').mousedown(function () {
            $("#umbrellaColor").stop(true, true).animate({ width: 240 }, { duration: 200 }, { easein: 'easeout' });
            $("#umbrellaRegular").stop(true, true).animate({ width: 240 }, { duration: 200 }, { easein: 'easeout' });
            $("#umbrellaDesat").stop(true, true).animate({ width: 240 }, { duration: 200 }, { easein: 'easeout' });
        });

        $('#umbrellaDesat').mouseup(function () {
            $("#umbrellaColor").stop(true, true).animate({ width: 256 }, { duration: 200 }, { easein: 'easein' });
            $("#umbrellaRegular").stop(true, true).animate({ width: 256 }, { duration: 200 }, { easein: 'easein' });
            $("#umbrellaDesat").stop(true, true).animate({ width: 256 }, { duration: 200 }, { easein: 'easein' });
        });
    });

    function fadeumbrellaOnLoad() {
        $('#umbrellaDesat').animate({ opacity: 0.0 }, { duration: 350 }, { easing: "easeout" });
    }

    return (
        <div className="px-4 my-5 text-center">
            <div className="d-block mb-4 position-relative" id="headerImageContainer" style={{ height: 250 + 'px' }}>
                <img className="start-0 position-absolute translate-middle top-20 start-50 mt-5" id="umbrellaColor" src="/Assets/3dicons/umbrella-colors.png" width="256" alt=""></img>
                <img className="start-0 position-absolute translate-middle top-20 start-50 mt-5" id="umbrellaRegular" src="/Assets/3dicons/umbrella.png" width="256" alt=""></img>
                <img className="start-0 position-absolute translate-middle top-20 start-50 mt-5" id="umbrellaDesat" src="/Assets/3dicons/umbrella-desat.png" width="256" alt=""></img>
            </div>
            <h1 className="display-5 fw-bold">About</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Multi-platform weather app implemented using Windows Presentation Foundation (WPF) and ASP.NET Core / React JS. Data is provided by the AccuWeather API and supports Free-tier access. Source code is available on <a href="https://github.com/DivideByZeno/Zeno-Weather-App" title="Zeno Weather App">GitHub.</a></p>
            </div>
        </div>
    );
}
