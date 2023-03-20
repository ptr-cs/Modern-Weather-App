import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faHome, faCog, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NavMenu.css';
import $ from 'jquery';

export default function NavMenu({ state }) {
    const currentNavLocation = useLocation();
    const navigate = useNavigate();


    function toggleNavbar() {
        if (state.menuOpen === false) {
            state.setMenuOpen(true)
        } else {
            state.setMenuOpen(false)
        }
    } 

    function GetConditionsAndForecast() {
        //
        if (state.apiKey !== '' && state.searchTerm !== '') {
            $.ajax({
                type: "GET",
                url: "http://dataservice.accuweather.com/locations/v1/search",
                data: { apikey: state.apiKey, q: state.searchTerm },
                success: function (locationResponse) {
                    if (currentNavLocation.pathname !== '/')
                        navigate("/");

                    console.log(locationResponse);

                    if (locationResponse) {
                        if (locationResponse.length > 0) {
                            state.setLocation(JSON.stringify(locationResponse[0]));

                            state.setIsLoadingCurrentConditions(true);
                            $.ajax({
                                type: "GET",
                                url: "http://dataservice.accuweather.com/currentconditions/v1/" + locationResponse[0].Key,
                                data: { apikey: state.apiKey, details: true },
                                success: function (conditionsResponse) {
                                    console.log(conditionsResponse);
                                    if (conditionsResponse.length > 0) {
                                        state.setCurrentConditions(JSON.stringify(conditionsResponse[0]));
                                    }
                                    state.setIsLoadingCurrentConditions(false);
                                },
                                failure: function (conditionsResponse) {
                                    
                                    state.setIsLoadingCurrentConditions(false);
                                    navigate("/error");
                                    console.log(conditionsResponse.responseText);
                                },
                                error: function (conditionsResponse) {
                                    
                                    state.setIsLoadingCurrentConditions(false);
                                    navigate("/error");
                                    console.log(conditionsResponse.responseText);
                                }
                            });

                            state.setIsLoadingForecast(true);
                            $.ajax({
                                type: "GET",
                                url: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationResponse[0].Key,
                                data: { apikey: state.apiKey },
                                success: function (forecast5DayResponse) {
                                    console.log(forecast5DayResponse);
                                    if (forecast5DayResponse !== '') {
                                        state.setForecast5Day(JSON.stringify(forecast5DayResponse));
                                    }
                                    state.setIsLoadingForecast(false);
                                },
                                failure: function (forecast5DayResponse) {
                                    
                                    state.setIsLoadingForecast(false);
                                    navigate("/error");
                                    console.log(forecast5DayResponse.responseText);
                                },
                                error: function (forecast5DayResponse) {
                                    
                                    state.setIsLoadingForecast(false);
                                    navigate("/error");
                                    console.log(forecast5DayResponse.responseText);
                                }
                            });
                        } else {
                            navigate("/locationnotfound");
                        }
                    } else {
                        navigate("/locationnotfound");
                    }
                },
                failure: function (locationResponse) {
                    
                    navigate("/error");
                    console.log(locationResponse.responseText);
                },
                error: function (locationResponse) {
                    
                    navigate("/error");
                    console.log(locationResponse.responseText);
                }
            });
        }
    }

    function handleSearch(e) {
        if (state.searchTerm !== '') {
            GetConditionsAndForecast()
            addSearchHistory()
        }
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
                <NavbarBrand tag={Link} to="/" style={{ wordBreak: "normal" }}><img className="me-2" src="/Assets/3dicons/sun.png" width="24" alt=""></img>ZenoWeather</NavbarBrand>
                <NavbarToggler className="mr-2" onClick={toggleNavbar} />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={ state.menuOpen } navbar>

                    <form className="d-flex mt-sm-0 mt-2" role="search" method="get">
                        <input className="form-control me-2" id="weatherSearchInput" list="datalistOptions"
                            type="search" placeholder="Enter a Location..." aria-label="Search"
                            onKeyDown={(e) => handleKeyPress(e)} onChange={(e) => state.setSearchTerm(e.target.value)}></input>
                        <datalist id="datalistOptions"></datalist>

                        <button className="btn btn-primary" type="button" onClick={(e) => handleSearch(e)} disabled={ state.searchTerm === ''}>Search</button>
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