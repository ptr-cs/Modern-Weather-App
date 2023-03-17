import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { MyProvider } from "./MyProvider";

export default function Layout({ routes, apiKey, searchTerm, location, currentConditions, setApiKey, setSearchTerm, searchHistory }) {
  var displayName = Layout.name;


    return (
        <div>
            <MyProvider>
                <NavMenu apiKey={apiKey}
                    searchTerm={searchTerm}
                    location={location}
                    currentConditions={currentConditions}
                    setApiKey={setApiKey}
                    setSearchTerm={setSearchTerm}
                    searchHistory={searchHistory} />
                <div className="container-fluid">
                    {routes }
                </div>
            </MyProvider>
        </div>
    );
}
