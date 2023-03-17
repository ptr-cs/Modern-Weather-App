import React, { useState } from 'react';
import { MContext } from "./MyProvider";
import Welcome from './Welcome';
import Weather from './Weather';

export default function Home({searchTerm, apiKey, location, currentConditions }) {
  var displayName = Home.name;

    return (
        <div>
            {
                (searchTerm !== "" && apiKey !== "")
                    ? <Weather apiKey={apiKey} searchTerm={searchTerm} />
                    : <Welcome apiKey={apiKey} searchTerm={searchTerm} location={location} currentConditions={currentConditions} />
            }
        </div>
    );
}
