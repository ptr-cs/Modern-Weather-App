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

    const [state, setState] = useState(
        {
        apiKey: '',
        searchTerm: '',
        location: '',
        currentConditions: '',
        forecast5Day: '',
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
        setIsDemoMode: setIsDemoMode
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
