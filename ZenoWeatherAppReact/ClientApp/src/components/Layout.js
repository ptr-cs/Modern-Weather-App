import React from 'react';
import NavMenu from './NavMenu';
import $ from 'jquery'

export default function Layout({ state, routes }) {
    $('#layoutContainer').click(function () {
        if (state.menuOpen === true)
            state.setMenuOpen(false);
    });

    return (
        <div>
            <NavMenu state={state} />
            <div id="layoutContainer" className="container-fluid px-1 px-sm-3">
                {routes}
            </div>
        </div>
    );
}
