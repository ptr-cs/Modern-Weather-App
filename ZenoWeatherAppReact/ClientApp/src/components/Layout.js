import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { MyProvider } from "./MyProvider";

export default function Layout({ state, routes }) {
  var displayName = Layout.name;


    return (
        <div>
            <MyProvider>
                <NavMenu state={ state } />
                <div className="container-fluid">
                    { routes }
                </div>
            </MyProvider>
        </div>
    );
}
