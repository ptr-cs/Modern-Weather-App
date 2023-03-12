import React, { Component } from 'react';

export const MContext = React.createContext();  //exporting context object
export class MyProvider extends Component {
    state = {
        message: "",
        apiKey: "",
        searchTerm: "",
        location: "",
        currentConditions: ""
    }
    render() {
        return (
            <MContext.Provider value={
                {
                    state: this.state,
                    setMessage: (value) => this.setState({
                        message: value
                    }),

                    setApiKey: (value) => this.setState({
                        apiKey: value
                    }),

                    setSearchTerm: (value) => this.setState({
                        searchTerm: value
                    }),

                    setLocation: (value) => this.setState({
                        location: value
                    }),

                    setCurrentConditions: (value) => this.setState({
                        currentConditions: value
                    })
                }}>
                {this.props.children}
            </MContext.Provider>)
    }
}