import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { MyProvider } from "./MyProvider";

export class Layout extends Component {
  static displayName = Layout.name;


  render() {
    return (
        <div>
            <MyProvider>
                <NavMenu />
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </MyProvider>
      </div>
    );
  }
}
