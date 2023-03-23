import React, { useState} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home'
import Settings from './components/pages/Settings'
import About from './components/pages/About'
import './lib/weather-icons-master/css/weather-icons.min.css';
import './lib/weather-icons-master/css/weather-icons-wind.min.css';
import './custom.css';
import ErrorGeneric from './components/pages/error/ErrorGeneric';
import NoLocationResults from './components/pages/error/NoLocationResults';
import $ from 'jquery'

export default function App() {
    const location = useLocation();

    React.useEffect(() => {
        $('#layoutContainer').stop(true, true).hide().fadeIn({ duration: 300 }, { easing: 'easein' });

        switch (location['pathname']) {
            case '/':
                $('#homeLinkIcon').addClass('activeNav');
                $('#settingsLinkIcon').removeClass('activeNav');
                $('#aboutLinkIcon').removeClass('activeNav');
                if (state.apiKey !== "" && state.location !== "" && state.currentConditions !== "")
                    animateWeather()
                break;
            case '/settings':
                $('#settingsLinkIcon').addClass('activeNav');
                $('#homeLinkIcon').removeClass('activeNav');
                $('#aboutLinkIcon').removeClass('activeNav');
                break;
            case '/about':
                $('#aboutLinkIcon').addClass('activeNav');
                $('#settingsLinkIcon').removeClass('activeNav');
                $('#homeLinkIcon').removeClass('activeNav');
                break;
            default:
                break;
        }
    }, [location])

    function animateWeather() {
        $('#locationConditionsHeader').eq(0).stop(true, true).css({ opacity: 0 }).animate({ opacity: 1 }, 500);

        $('#currentConditionsContainer > div > div > div').eq(0).stop(true, true).css({ opacity: 0 }).animate({ opacity: 1 }, 500);
        $('#currentConditionsContainer > div > div > div').eq(1).stop(true, true).css({ opacity: 0 }).delay(100).animate({ opacity: 1 }, 500);
        $('#currentConditionsContainer > div > div > div').eq(2).stop(true, true).css({ opacity: 0 }).delay(200).animate({ opacity: 1 }, 500);
        $('#currentConditionsContainer > div > div > div').eq(3).stop(true, true).css({ opacity: 0 }).delay(300).animate({ opacity: 1 }, 500);
        $('#currentConditionsContainer > div > div > div').eq(4).stop(true, true).css({ opacity: 0 }).delay(400).animate({ opacity: 1 }, 500);

        $('#currentConditionsContainer > div > div > div').eq(5).stop(true, true).css({ opacity: 0 }).delay(500).animate({ opacity: 1 }, 500);
        $('#currentConditionsContainer > div > div > div').eq(6).stop(true, true).css({ opacity: 0 }).delay(600).animate({ opacity: 1 }, 500);
        $('#currentConditionsContainer > div > div > div').eq(7).stop(true, true).css({ opacity: 0 }).delay(700).animate({ opacity: 1 }, 500);
        $('#currentConditionsContainer > div > div > div').eq(8).stop(true, true).css({ opacity: 0 }).delay(800).animate({ opacity: 1 }, 500);
        $('#currentConditionsContainer > div > div > div').eq(9).stop(true, true).css({ opacity: 0 }).delay(900).animate({ opacity: 1 }, 500);

        $('#forecast5DayContainer > div').eq(0).stop(true, true).css({ opacity: 0 }).animate({ opacity: 1 }, 500);
        $('#forecast5DayContainer > div').eq(1).stop(true, true).css({ opacity: 0 }).delay(100).animate({ opacity: 1 }, 500);
        $('#forecast5DayContainer > div').eq(2).stop(true, true).css({ opacity: 0 }).delay(200).animate({ opacity: 1 }, 500);
        $('#forecast5DayContainer > div').eq(3).stop(true, true).css({ opacity: 0 }).delay(300).animate({ opacity: 1 }, 500);
        $('#forecast5DayContainer > div').eq(4).stop(true, true).css({ opacity: 0 }).delay(400).animate({ opacity: 1 }, 500);
        $('#forecast5DayContainer > div').eq(5).stop(true, true).css({ opacity: 0 }).delay(500).animate({ opacity: 1 }, 500);
    }

    const setApiKey = (value) => {
        setState(prevValues => {
            return { ...prevValues, apiKey: value }
        })
    };

    const setSearchTerm = (value) => {
        setState(prevValues => {
            return { ...prevValues, searchTerm: value }
        })
    };

    const setLocation = (value) => {
        setState(prevValues => {
            return { ...prevValues, location: value }
        })
    };

    const setCurrentConditions = (value) => {
        setState(prevValues => {
            return { ...prevValues, currentConditions: value }
        })
    };

    const setForecast5Day = (value) => {
        setState(prevValues => {
            return { ...prevValues, forecast5Day: value }
        })
    };

    const setUnitsSystem = (value) => {
        setState(prevValues => {
            return { ...prevValues, unitsSystem: value }
        })
    };

    const setMenuOpen = (value) => {
        setState(prevValues => {
            return { ...prevValues, menuOpen: value }
        })
    };

    const setIsLoadingCurrentConditions = (value) => {
        setState(prevValues => {
            return { ...prevValues, isLoadingCurrentConditions: value }
        })
    };

    const setIsLoadingForecast = (value) => {
        setState(prevValues => {
            return { ...prevValues, isLoadingForecast: value }
        })
    };

    const setIsDemoMode = (value) => {
        setState(prevValues => {
            return { ...prevValues, isDemoMode: value }
        })
    };

    const setDemoLocation = () => {
        setLocation(JSON.stringify(locationData[0]));
    };

    const setDemoConditions = () => {
        setCurrentConditions(JSON.stringify(conditionsData[0]));
    };

    const setDemoForecast = () => {
        setForecast5Day(JSON.stringify(forecastData));
    };

    var locationData = [
        {
            "Version": 1,
            "Type": "City",
            "Rank": 85,
            "LocalizedName": "Location",
            "EnglishName": "Location",
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

    const [state, setState] = useState(
        {
        apiKey: 'demo',
        searchTerm: 'Location',
            location: JSON.stringify(locationData[0]),
            currentConditions: JSON.stringify(conditionsData[0]),
            forecast5Day: JSON.stringify(forecastData),
        menuOpen: false,
        isLoadingCurrentConditions: false,
        isLoadingForecast: false,
        unitsSystem: 'Imperial',
        searchHistory: [],
        setApiKey: setApiKey,
        setSearchTerm: setSearchTerm,
        setLocation: setLocation,
        setCurrentConditions: setCurrentConditions,
        setForecast5Day: setForecast5Day,
        setUnitsSystem: setUnitsSystem,
        setMenuOpen: setMenuOpen,
        setIsLoadingCurrentConditions: setIsLoadingCurrentConditions,
        setIsLoadingForecast: setIsLoadingForecast,
        isDemoMode: true,
        setIsDemoMode: setIsDemoMode,
        setDemoLocation: setDemoLocation,
        setDemoConditions: setDemoConditions,
        setDemoForecast: setDemoForecast
        });


    return (
        <Layout state={ state }
            routes={
                <Routes>
                    <Route index element={ <Home state={state} /> } />
                    <Route path="settings" element={<Settings state={state} />} />
                    <Route path="about" element={<About />} />
                    <Route path="error" element={<ErrorGeneric />} />
                    <Route path="locationnotfound" element={<NoLocationResults />} />
                </Routes> }>
        </Layout>
    );
}
