import React, { Component } from 'react';

export class About extends Component {
    static displayName = About.name;

    render() {
        return (
			<div id="aboutContainer">
				<div className="container-xxl bd-gutter mt-4 align-middle ">
					<div className="col-md-8 mx-auto text-center align-middle">
						<div className="rounded-circle d-block mx-auto mb-3 shadow">
						</div>
						<h1 className="mb-3 fw-semibold">About</h1>
						<p className="lead mb-4">       Weather app implemented using Windows Presentation Foundation (WPF) and ASP.NET Razor pages. Data is provided by the AccuWeather API and supports Free-tier access. Source code is available on GitHub.</p>
					</div>
				</div>
			</div>
        );
    }
}
