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

    $('#layoutContainer').click(function (e) {
        if (state.menuOpen === true)
            state.setMenuOpen(false);
        return false;
    });

    function toggleNavbar(e) {
        if (state.menuOpen === false) {
            state.setMenuOpen(true)
        } else {
            state.setMenuOpen(false)
        }
    } 

    function GetConditionsAndForecast() {
        // 
        if (state.apiKey !== '' && state.searchTerm !== '') {
            if (state.isDemoMode) {
                var locationData = [
                    {
                        "Version": 1,
                        "Type": "City",
                        "Rank": 85,
                        "LocalizedName": "Demo Location",
                        "EnglishName": "Demo Location",
                        "PrimaryPostalCode": "37215",
                        "Region": {
                            "ID": "NAM",
                            "LocalizedName": "North America",
                            "EnglishName": "North America"
                        },
                        "Country": {
                            "ID": "US",
                            "LocalizedName": "United States",
                            "EnglishName": "United States"
                        },
                        "AdministrativeArea": {
                            "ID": "Demo",
                            "LocalizedName": "Tennessee",
                            "EnglishName": "Tennessee",
                            "Level": 1,
                            "LocalizedType": "State",
                            "EnglishType": "State",
                            "CountryID": "US"
                        }
                    }
                ]

                var conditionsData = [
                    {
                        "LocalObservationDateTime": "2023-03-21T22:13:00-05:00",
                        "EpochTime": 1679454780,
                        "WeatherText": "Rain",
                        "WeatherIcon": 18,
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "IsDayTime": false,
                        "Temperature": {
                            "Metric": {
                                "Value": 7.5,
                                "Unit": "C",
                                "UnitType": 17
                            },
                            "Imperial": {
                                "Value": 46,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "RealFeelTemperature": {
                            "Metric": {
                                "Value": 7.1,
                                "Unit": "C",
                                "UnitType": 17,
                                "Phrase": "Chilly"
                            },
                            "Imperial": {
                                "Value": 45,
                                "Unit": "F",
                                "UnitType": 18,
                                "Phrase": "Chilly"
                            }
                        },
                        "RealFeelTemperatureShade": {
                            "Metric": {
                                "Value": 7.1,
                                "Unit": "C",
                                "UnitType": 17,
                                "Phrase": "Chilly"
                            },
                            "Imperial": {
                                "Value": 45,
                                "Unit": "F",
                                "UnitType": 18,
                                "Phrase": "Chilly"
                            }
                        },
                        "RelativeHumidity": 82,
                        "IndoorRelativeHumidity": 36,
                        "DewPoint": {
                            "Metric": {
                                "Value": 4.7,
                                "Unit": "C",
                                "UnitType": 17
                            },
                            "Imperial": {
                                "Value": 40,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "Wind": {
                            "Direction": {
                                "Degrees": 90,
                                "Localized": "E",
                                "English": "E"
                            },
                            "Speed": {
                                "Metric": {
                                    "Value": 0.9,
                                    "Unit": "km/h",
                                    "UnitType": 7
                                },
                                "Imperial": {
                                    "Value": 0.5,
                                    "Unit": "mi/h",
                                    "UnitType": 9
                                }
                            }
                        },
                        "WindGust": {
                            "Speed": {
                                "Metric": {
                                    "Value": 2.8,
                                    "Unit": "km/h",
                                    "UnitType": 7
                                },
                                "Imperial": {
                                    "Value": 1.7,
                                    "Unit": "mi/h",
                                    "UnitType": 9
                                }
                            }
                        },
                        "UVIndex": 0,
                        "UVIndexText": "Low",
                        "Visibility": {
                            "Metric": {
                                "Value": 16.1,
                                "Unit": "km",
                                "UnitType": 6
                            },
                            "Imperial": {
                                "Value": 10,
                                "Unit": "mi",
                                "UnitType": 2
                            }
                        },
                        "ObstructionsToVisibility": "R",
                        "CloudCover": 100,
                        "Ceiling": {
                            "Metric": {
                                "Value": 1890,
                                "Unit": "m",
                                "UnitType": 5
                            },
                            "Imperial": {
                                "Value": 6200,
                                "Unit": "ft",
                                "UnitType": 0
                            }
                        },
                        "Pressure": {
                            "Metric": {
                                "Value": 1023.4,
                                "Unit": "mb",
                                "UnitType": 14
                            },
                            "Imperial": {
                                "Value": 30.22,
                                "Unit": "inHg",
                                "UnitType": 12
                            }
                        },
                        "PressureTendency": {
                            "LocalizedText": "Rising",
                            "Code": "R"
                        },
                        "Past24HourTemperatureDeparture": {
                            "Metric": {
                                "Value": 3.5,
                                "Unit": "C",
                                "UnitType": 17
                            },
                            "Imperial": {
                                "Value": 6,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "ApparentTemperature": {
                            "Metric": {
                                "Value": 9.4,
                                "Unit": "C",
                                "UnitType": 17
                            },
                            "Imperial": {
                                "Value": 49,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "WindChillTemperature": {
                            "Metric": {
                                "Value": 7.8,
                                "Unit": "C",
                                "UnitType": 17
                            },
                            "Imperial": {
                                "Value": 46,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "WetBulbTemperature": {
                            "Metric": {
                                "Value": 6.2,
                                "Unit": "C",
                                "UnitType": 17
                            },
                            "Imperial": {
                                "Value": 43,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "Precip1hr": {
                            "Metric": {
                                "Value": 3,
                                "Unit": "mm",
                                "UnitType": 3
                            },
                            "Imperial": {
                                "Value": 0.12,
                                "Unit": "in",
                                "UnitType": 1
                            }
                        },
                        "PrecipitationSummary": {
                            "Precipitation": {
                                "Metric": {
                                    "Value": 3.3,
                                    "Unit": "mm",
                                    "UnitType": 3
                                },
                                "Imperial": {
                                    "Value": 0.13,
                                    "Unit": "in",
                                    "UnitType": 1
                                }
                            },
                            "PastHour": {
                                "Metric": {
                                    "Value": 3,
                                    "Unit": "mm",
                                    "UnitType": 3
                                },
                                "Imperial": {
                                    "Value": 0.12,
                                    "Unit": "in",
                                    "UnitType": 1
                                }
                            },
                            "Past3Hours": {
                                "Metric": {
                                    "Value": 6.3,
                                    "Unit": "mm",
                                    "UnitType": 3
                                },
                                "Imperial": {
                                    "Value": 0.25,
                                    "Unit": "in",
                                    "UnitType": 1
                                }
                            },
                            "Past6Hours": {
                                "Metric": {
                                    "Value": 13.7,
                                    "Unit": "mm",
                                    "UnitType": 3
                                },
                                "Imperial": {
                                    "Value": 0.54,
                                    "Unit": "in",
                                    "UnitType": 1
                                }
                            },
                            "Past9Hours": {
                                "Metric": {
                                    "Value": 13.8,
                                    "Unit": "mm",
                                    "UnitType": 3
                                },
                                "Imperial": {
                                    "Value": 0.55,
                                    "Unit": "in",
                                    "UnitType": 1
                                }
                            },
                            "Past12Hours": {
                                "Metric": {
                                    "Value": 13.8,
                                    "Unit": "mm",
                                    "UnitType": 3
                                },
                                "Imperial": {
                                    "Value": 0.55,
                                    "Unit": "in",
                                    "UnitType": 1
                                }
                            },
                            "Past18Hours": {
                                "Metric": {
                                    "Value": 13.8,
                                    "Unit": "mm",
                                    "UnitType": 3
                                },
                                "Imperial": {
                                    "Value": 0.55,
                                    "Unit": "in",
                                    "UnitType": 1
                                }
                            },
                            "Past24Hours": {
                                "Metric": {
                                    "Value": 13.8,
                                    "Unit": "mm",
                                    "UnitType": 3
                                },
                                "Imperial": {
                                    "Value": 0.55,
                                    "Unit": "in",
                                    "UnitType": 1
                                }
                            }
                        }
                    }
                ]

                var forecastData = {
                    "Headline": {
                        "EffectiveDate": "2023-03-21T20:00:00-05:00",
                        "EffectiveEpochDate": 1679446800,
                        "Severity": 3,
                        "Text": "Expect rainy weather this evening through tomorrow morning",
                        "Category": "rain",
                        "EndDate": "2023-03-22T14:00:00-05:00",
                        "EndEpochDate": 1679511600
                    },
                    "DailyForecasts": [
                        {
                            "Date": "2023-03-21T07:00:00-05:00",
                            "EpochDate": 1679400000,
                            "Temperature": {
                                "Minimum": {
                                    "Value": 45,
                                    "Unit": "F",
                                    "UnitType": 18
                                },
                                "Maximum": {
                                    "Value": 56,
                                    "Unit": "F",
                                    "UnitType": 18
                                }
                            },
                            "Day": {
                                "Icon": 13,
                                "IconPhrase": "Mostly cloudy w/ showers",
                                "HasPrecipitation": true,
                                "PrecipitationType": "Rain",
                                "PrecipitationIntensity": "Light"
                            },
                            "Night": {
                                "Icon": 18,
                                "IconPhrase": "Rain",
                                "HasPrecipitation": true,
                                "PrecipitationType": "Rain",
                                "PrecipitationIntensity": "Light"
                            },
                            "Sources": [
                                "AccuWeather"
                            ]
                        },
                        {
                            "Date": "2023-03-22T07:00:00-05:00",
                            "EpochDate": 1679486400,
                            "Temperature": {
                                "Minimum": {
                                    "Value": 57,
                                    "Unit": "F",
                                    "UnitType": 18
                                },
                                "Maximum": {
                                    "Value": 59,
                                    "Unit": "F",
                                    "UnitType": 18
                                }
                            },
                            "Day": {
                                "Icon": 12,
                                "IconPhrase": "Showers",
                                "HasPrecipitation": true,
                                "PrecipitationType": "Rain",
                                "PrecipitationIntensity": "Light"
                            },
                            "Night": {
                                "Icon": 35,
                                "IconPhrase": "Partly cloudy",
                                "HasPrecipitation": false
                            },
                            "Sources": [
                                "AccuWeather"
                            ]
                        },
                        {
                            "Date": "2023-03-23T07:00:00-05:00",
                            "EpochDate": 1679572800,
                            "Temperature": {
                                "Minimum": {
                                    "Value": 62,
                                    "Unit": "F",
                                    "UnitType": 18
                                },
                                "Maximum": {
                                    "Value": 78,
                                    "Unit": "F",
                                    "UnitType": 18
                                }
                            },
                            "Day": {
                                "Icon": 4,
                                "IconPhrase": "Intermittent clouds",
                                "HasPrecipitation": false
                            },
                            "Night": {
                                "Icon": 8,
                                "IconPhrase": "Dreary",
                                "HasPrecipitation": false
                            },
                            "Sources": [
                                "AccuWeather"
                            ]
                        },
                        {
                            "Date": "2023-03-24T07:00:00-05:00",
                            "EpochDate": 1679659200,
                            "Temperature": {
                                "Minimum": {
                                    "Value": 59,
                                    "Unit": "F",
                                    "UnitType": 18
                                },
                                "Maximum": {
                                    "Value": 74,
                                    "Unit": "F",
                                    "UnitType": 18
                                }
                            },
                            "Day": {
                                "Icon": 15,
                                "IconPhrase": "Thunderstorms",
                                "HasPrecipitation": true,
                                "PrecipitationType": "Rain",
                                "PrecipitationIntensity": "Heavy"
                            },
                            "Night": {
                                "Icon": 18,
                                "IconPhrase": "Rain",
                                "HasPrecipitation": true,
                                "PrecipitationType": "Rain",
                                "PrecipitationIntensity": "Heavy"
                            },
                            "Sources": [
                                "AccuWeather"
                            ]
                        },
                        {
                            "Date": "2023-03-25T07:00:00-05:00",
                            "EpochDate": 1679745600,
                            "Temperature": {
                                "Minimum": {
                                    "Value": 45,
                                    "Unit": "F",
                                    "UnitType": 18
                                },
                                "Maximum": {
                                    "Value": 70,
                                    "Unit": "F",
                                    "UnitType": 18
                                }
                            },
                            "Day": {
                                "Icon": 3,
                                "IconPhrase": "Partly sunny",
                                "HasPrecipitation": false
                            },
                            "Night": {
                                "Icon": 36,
                                "IconPhrase": "Intermittent clouds",
                                "HasPrecipitation": false
                            },
                            "Sources": [
                                "AccuWeather"
                            ]
                        }
                    ]
                }

                navigate("/");

                state.setLocation(JSON.stringify(locationData[0]));
                state.setCurrentConditions(JSON.stringify(conditionsData[0]));
                state.setForecast5Day(JSON.stringify(forecastData));

                return;
            }

            $.ajax({
                type: "GET",
                url: "https://dataservice.accuweather.com/locations/v1/search",
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
                                url: "https://dataservice.accuweather.com/currentconditions/v1/" + locationResponse[0].Key,
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
                                url: "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationResponse[0].Key,
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
        e.preventDefault();
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
                <NavbarBrand tag={Link} to="/" className="ms-4" style={{ whiteSpace: "noWrap" }}><img className="me-2 float-start" src="/Assets/3dicons/sun.png" width="24" alt=""></img><p className="m-0 me-4">ZenoWeather</p></NavbarBrand>
                <NavbarToggler className="mr-2" onClick={(e) => toggleNavbar(e)} />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={ state.menuOpen } navbar>

                    <form className="d-flex mt-sm-0 mt-2 me-4" role="search" method="get">
                        <input className="form-control me-2" id="weatherSearchInput" list="datalistOptions"
                            type="search" placeholder="Enter a Location..." aria-label="Search" value={state.searchTerm }
                            onKeyDown={(e) => handleKeyPress(e)} onChange={(e) => state.setSearchTerm(e.target.value)}></input>
                        <datalist id="datalistOptions"></datalist>

                        <button className="btn btn-primary" type="button" onClick={(e) => handleSearch(e)} onSubmit={(e) => handleSearch(e) } disabled={ state.searchTerm === ''}>Search</button>
                    </form>
                    <ul className="navbar-nav flex-grow">
                        <NavItem id={'HomeNavItem'} aria-label="Home">
                            <NavLink tag={Link} to="/" tooltip="Home"><FontAwesomeIcon size="lg" icon={faHome} id="homeLinkIcon"/><span className="navLinkText">Home</span></NavLink>
                        </NavItem>
                        <UncontrolledTooltip
                            offset={[0, 20]}
                            placement="bottom"
                            target="HomeNavItem"
                        >Home
                        </UncontrolledTooltip>
                        <NavItem id={'SettingsNavItem'} aria-label="Settings">
                            <NavLink tag={Link} to="/settings"><FontAwesomeIcon size="lg" icon={faCog} id="settingsLinkIcon" /><span className="navLinkText">Settings</span></NavLink>
                        </NavItem>
                        <UncontrolledTooltip
                            offset={[0, 20]}
                            placement="bottom"
                            target="SettingsNavItem"
                        >Settings
                        </UncontrolledTooltip>
                        <NavItem id={'AboutNavItem'} aria-label="About">
                            <NavLink tag={Link} to="/about"><FontAwesomeIcon size="lg" icon={faInfoCircle} id="aboutLinkIcon" /><span className="navLinkText">About</span></NavLink>
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