import React from 'react';
import NavMenu from './NavMenu';
import $ from 'jquery'

export default function Layout({ state, routes }) {

    $('#layoutContainer').click(function (e) {
        if (state.menuOpen === true)
            state.setMenuOpen(false);
    });

    $('#navMenuContainer').click(function (event) {
        event.stopPropagation();
    });

    return (
        <div>
            <NavMenu id="navMenuContainer" state={state} />
            <div id="layoutContainer" className="container-fluid px-3 px-md-5 px-lg-3 px-xl-3 px-sm-3 pb-3">
                {routes}
            </div>
        </div>
    );
}
