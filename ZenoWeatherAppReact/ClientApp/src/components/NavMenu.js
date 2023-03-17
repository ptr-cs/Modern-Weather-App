import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { faHome, faCog, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MContext } from "./MyProvider";
import './NavMenu.css';
import $ from 'jquery';

export default function NavMenu({ apiKey, searchTerm, location, currentConditions, searchHistory, setApiKey, setSearchTerm }) {
    const [collapsed, setCollapsed] = useState(false);
    var displayName = NavMenu.name;


    function toggleNavbar() {
        if (collapsed === true) {
            setCollapsed(false)
        } else {
            setCollapsed(true)
        }
    }

    function getConditionsAndForecast(context) {
        //var self = this;
        //let key = context.state.apiKey;
        //let term = context.state.searchTerm;

        //if (key !== "" && term !== "") {
        //    //$.ajax({
        //    //    type: "GET",
        //    //    url: "http://dataservice.accuweather.com/locations/v1/search",
        //    //    data: { apikey: key, q: term },
        //    //    success: function (locationResponse) {
        //    //        //debugger;
        //    //        console.log(locationResponse);
        //    //        if (locationResponse.length > 0) {
        //    //            context.state.location = JSON.stringify(locationResponse[0]);
        //    //            //debugger;
        //    //            $.ajax({
        //    //                type: "GET",
        //    //                url: "http://dataservice.accuweather.com/currentconditions/v1/" + locationResponse[0].Key,
        //    //                data: { apikey: key, details: true },
        //    //                success: function (conditionsResponse) {
        //    //                    //debugger;
        //    //                    console.log(conditionsResponse);
        //    //                    if (conditionsResponse.length > 0) {
        //    //                        context.state.currentConditions = JSON.stringify(conditionsResponse[0]);
        //    //                        if (context.state.location !== {} && context.state.currentConditions !== {}) {
        //    //                            //debugger
        //    //                        }
        //    //                    }
        //    //                },
        //    //                failure: function (conditionsResponse) {
        //    //                    console.log(conditionsResponse.responseText);
        //    //                },
        //    //                error: function (conditionsResponse) {
        //    //                    console.log(conditionsResponse.responseText);
        //    //                }
        //    //            });
        //    //        }
        //    //    },
        //    //    failure: function (locationResponse) {
        //    //        console.log(locationResponse.responseText);
        //    //    },
        //    //    error: function (locationResponse) {
        //    //        console.log(locationResponse.responseText);
        //    //    }
        //    //});
        //}
    }

    function handleSearch(e) {
        //debugger;
        //this.getConditionsAndForecast(context)
        addSearchHistory()
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            //debugger;
            handleSearch(e);
            e.preventDefault();
        }
    }

    function addSearchHistory() {
        if (!searchHistory.includes(searchTerm)) {
            if (searchHistory.length === 5) {
                searchHistory.shift();
                $('#datalistOptions').find('option').eq(0).remove();
            }

            searchHistory.push(searchTerm);
            var option = $('<option value="' + searchTerm + '"></option>');
            $('#datalistOptions').append(option);
        }
    }

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3 fixed-top">
                <NavbarBrand tag={Link} to="/" style={{ wordBreak: "normal" }}>ZenoWeather</NavbarBrand>
                <div className="d-flex align-middle">

                </div>

                <NavbarToggler onClick={ toggleNavbar } className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={ collapsed } navbar>

                    <form className="d-flex mt-sm-0 mt-2" role="search" method="get">
                        <input className="form-control me-2" id="weatherSearchInput" list="datalistOptions"
                            type="search" placeholder="Enter a Location..." aria-label="Search"
                            onKeyDown={(e) => handleKeyPress(e)}
                            onChange={() => setSearchTerm($('#weatherSearchInput').val())}></input>
                        <datalist id="datalistOptions"></datalist>

                        <button className="btn btn-primary" type="button">Search</button>
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