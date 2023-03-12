import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Tooltip, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { faHome, faCog, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyProvider, MContext } from "./MyProvider";
import './NavMenu.css';
import $ from 'jquery';

export class NavMenu extends Component {
  static displayName = NavMenu.name;


  constructor (props) {
    super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.getConditionsAndForecast = this.getConditionsAndForecast.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {
        collapsed: true,
    };
  }

  toggleNavbar () {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    getConditionsAndForecast(key, term) {
        debugger;

        if (key != "" && term != "") {
            $.ajax({
                type: "GET",
                url: "http://dataservice.accuweather.com/locations/v1/search",
                data: { apikey: key, q: term },
                success: function (locationResponse) {
                    debugger;
                    console.log(locationResponse);
                    $.ajax({
                        type: "GET",
                        url: "http://dataservice.accuweather.com/currentconditions/v1/" + locationResponse[0].Key,
                        data: { apikey: key, details:true },
                        success: function (conditionsResponse) {
                            debugger;
                            console.log(conditionsResponse);
                        },
                        failure: function (conditionsResponse) {
                            console.log(conditionsResponse.responseText);
                        },
                        error: function (conditionsResponse) {
                            console.log(conditionsResponse.responseText);
                        }
                    });
                },
                failure: function (locationResponse) {
                    console.log(locationResponse.responseText);
                },
                error: function (locationResponse) {
                    console.log(locationResponse.responseText);
                }
            });
        }
    }

    handleKeyPress(e, key, term) {

        // debugger;
        if (e.key == 'Enter') {
            debugger;
            this.getConditionsAndForecast(key, term)
            e.preventDefault();
        }
    }

  render() {
    return (
      <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3 fixed-top">
                <NavbarBrand tag={Link} to="/" style={{ wordBreak: "normal" }}>ZenoWeather</NavbarBrand>
                <div className="d-flex align-middle">

            </div>
            
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>

                    <form className="d-flex" role="search" method="get">
                        <MContext.Consumer>
                            {(context) => (<input className="form-control me-2" id="weatherSearchInput"
                                type="search" placeholder="Enter a Location..." aria-label="Search"
                                onKeyDown={(e) => this.handleKeyPress(e, context.state.apiKey, context.state.searchTerm)}
                                onChange={() => context.setSearchTerm($('#weatherSearchInput').val())}></input>)}
                            
                        </MContext.Consumer>
                            <MContext.Consumer>
                            {(context) => (<button className="btn btn-primary" type="button" disabled={(context.state.searchTerm) ? "" : " disabled"}
                                onClick={() => this.getConditionsAndForecast(context.state.apiKey, context.state.searchTerm)}>Search</button>)}
                        </MContext.Consumer>
                    </form>
            <ul className="navbar-nav flex-grow">
                        <NavItem id={'HomeNavItem'} aria-label="Home"> 
                <NavLink tag={Link} to="/" tooltip="Home"><FontAwesomeIcon size="lg" icon={faHome} /><span className="navLinkText">Home</span></NavLink>
            </NavItem>
                        <UncontrolledTooltip
                            offset={[0, 20]}
                            placement="bottom"
                            target="HomeNavItem"
                        >Home
                        </UncontrolledTooltip>
            <NavItem id={'SettingsNavItem'} aria-label="Settings">
                            <NavLink tag={Link} to="/settings"><FontAwesomeIcon size="lg" icon={faCog} /><span className="navLinkText">Settings</span></NavLink>
            </NavItem>
                        <UncontrolledTooltip
                            offset={[0, 20]}
                            placement="bottom"
                            target="SettingsNavItem"
                        >Settings
                        </UncontrolledTooltip>
            <NavItem id={'AboutNavItem'} aria-label="About">
                            <NavLink tag={Link} to="/about"><FontAwesomeIcon size="lg" icon={faInfoCircle} /><span className="navLinkText">About</span></NavLink>
            </NavItem>
                        <UncontrolledTooltip
                            offset={[0, 20]}
                            placement="bottom"
                            target="AboutNavItem"
            >About
            </UncontrolledTooltip>
              {/*<NavItem>*/}
              {/*  <NavLink tag={Link}  to="/counter">Counter</NavLink>*/}
              {/*</NavItem>*/}
              {/*<NavItem>*/}
              {/*  <NavLink tag={Link}  to="/fetch-data">Fetch data</NavLink>*/}
              {/*</NavItem>*/}
            </ul>
          </Collapse>
        </Navbar>
      </header>

    );
  }
}
