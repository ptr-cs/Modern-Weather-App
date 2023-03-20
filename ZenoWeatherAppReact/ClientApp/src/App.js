import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home'
import Settings from './components/pages/Settings'
import About from './components/pages/About'
import './lib/weather-icons-master/css/weather-icons.min.css';
import './lib/weather-icons-master/css/weather-icons-wind.min.css';
import './custom.css';
import ErrorGeneric from './components/pages/error/ErrorGeneric';
import NoLocationResults from './components/pages/error/NoLocationResults';

export default function App() {
    //const [apiKey, setApiKey] = useState('');
    //const [searchTerm, setSearchTerm] = useState('');
    //const [location, setLocation] = useState('');
    //const [currentConditions, setCurrentConditions] = useState('');
    //const [searchHistory, setSearchHistory] = useState([]);

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
        setIsLoadingForecast: setIsLoadingForecast
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
