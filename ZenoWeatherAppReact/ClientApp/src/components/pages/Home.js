import React from 'react';
import Welcome from './Welcome';
import Weather from './Weather';

export default function Home({ state }) {

    return (
        <div>
            {
                (state.apiKey !== "" && state.location !== "" && state.currentConditions !== "")
                    ? <Weather state={state} />
                    : <Welcome state={state} />
            }
        </div>
    );
}
