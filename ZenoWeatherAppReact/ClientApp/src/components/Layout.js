import React from 'react';
import NavMenu from './NavMenu';
import $ from 'jquery'

export default function Layout({ state, routes }) {
    return (
        <div>
            <NavMenu state={state} />
            <div id="layoutContainer" className="container-fluid px-3 px-sm-3 pb-3">
                {routes}
            </div>
        </div>
    );
}
