import React, { Component, useContext } from 'react';
import { MContext } from "./MyProvider";
import { Welcome } from './Welcome';
import { Weather } from './Weather';

export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (
          <div>

              <MContext.Consumer>
                  {(context) => (
                      (context.state.searchTerm !== "" && context.state.apiKey !== "")
                          ? <Weather />
                          : <Welcome />
                  )}
              </MContext.Consumer>
          </div>
    );
  }
}
