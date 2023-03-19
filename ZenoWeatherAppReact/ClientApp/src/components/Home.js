import React, { useState } from 'react';
import { MContext } from "./MyProvider";
import Welcome from './Welcome';
import Weather from './Weather';

export default function Home({ state }) {
  var displayName = Home.name;

    return (
        <div>
            {
                (state.searchTerm !== "" && state.apiKey !== "" && state.location !== "" && state.currentConditions !== "")
                    ? <Weather state={state} />
                    : <Welcome state={state} />
            }
        </div>
    );
}
