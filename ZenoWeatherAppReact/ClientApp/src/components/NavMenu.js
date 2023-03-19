import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faHome, faCog, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NavMenu.css';
import $ from 'jquery';

export default function NavMenu({ state }) {
    const [collapsed, setCollapsed] = useState(false);
    const currentNavLocation = useLocation();
    const navigate = useNavigate();
    var displayName = NavMenu.name;


    function toggleNavbar() {
        if (collapsed === true) {
            setCollapsed(false)
        } else {
            setCollapsed(true)
        }
    }

    function GetConditionsAndForecast() {
        if (state.apiKey !== '' && state.searchTerm !== '') {
            if (currentNavLocation.pathname !== '/')
                navigate("/");
            $.ajax({
                type: "GET",
                url: "http://dataservice.accuweather.com/locations/v1/search",
                data: { apikey: state.apiKey, q: state.searchTerm },
                success: function (locationResponse) {
                    console.log(locationResponse);
                    if (locationResponse.length > 0) {
                        state.setLocation(JSON.stringify(locationResponse[0]));
                        $.ajax({
                            type: "GET",
                            url: "http://dataservice.accuweather.com/currentconditions/v1/" + locationResponse[0].Key,
                            data: { apikey: state.apiKey, details: true },
                            success: function (conditionsResponse) {
                                console.log(conditionsResponse);
                                if (conditionsResponse.length > 0) {
                                    state.setCurrentConditions(JSON.stringify(conditionsResponse[0]));
                                }
                            },
                            failure: function (conditionsResponse) {
                                console.log(conditionsResponse.responseText);
                            },
                            error: function (conditionsResponse) {
                                console.log(conditionsResponse.responseText);
                            }
                        });

                        $.ajax({
                            type: "GET",
                            url: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationResponse[0].Key,
                            data: { apikey: state.apiKey },
                            success: function (forecast5DayResponse) {
                                debugger;
                                console.log(forecast5DayResponse);
                                if (forecast5DayResponse !== '') {
                                    state.setForecast5Day(JSON.stringify(forecast5DayResponse));
                                }
                            },
                            failure: function (forecast5DayResponse) {
                                console.log(forecast5DayResponse.responseText);
                            },
                            error: function (forecast5DayResponse) {
                                console.log(forecast5DayResponse.responseText);
                            }
                        });
                    }
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

    function handleSearch(e) {
        GetConditionsAndForecast()
        addSearchHistory()
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSearch(e);
            e.preventDefault();
        }
    }

    function addSearchHistory() {
        if (!state.searchHistory.includes(state.searchTerm)) {
            if (state.searchHistory.length === 5) {
                state.searchHistory.shift();
                $('#datalistOptions').find('option').eq(0).remove();
            }

            state.searchHistory.push(state.searchTerm);
            var option = $('<option value="' + state.searchTerm + '"></option>');
            $('#datalistOptions').append(option);
        }
    }

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3 fixed-top">
                <NavbarBrand tag={Link} to="/" style={{ wordBreak: "normal" }}>ZenoWeather</NavbarBrand>
                <div className="d-flex align-middle">

                </div>

                <NavbarToggler className="mr-2" onClick={toggleNavbar} />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={ collapsed } navbar>

                    <form className="d-flex mt-sm-0 mt-2" role="search" method="get">
                        <input className="form-control me-2" id="weatherSearchInput" list="datalistOptions"
                            type="search" placeholder="Enter a Location..." aria-label="Search"
                            onKeyDown={(e) => handleKeyPress(e)}
                            onChange={() => state.setSearchTerm($('#weatherSearchInput').val())}></input>
                        <datalist id="datalistOptions"></datalist>

                        <button className="btn btn-primary" type="button" onClick={(e) => handleSearch(e) }>Search</button>
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
                    </ul>
                </Collapse>
            </Navbar>
        </header>

    );
}