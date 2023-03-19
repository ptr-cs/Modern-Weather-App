import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home'
import Settings from './components/Settings'
import About from './components/About'
import './lib/weather-icons-master/css/weather-icons.min.css';
import './lib/weather-icons-master/css/weather-icons-wind.min.css';
import './custom.css';

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

    const [state, setState] = useState(
    {
        apiKey: '',
        searchTerm: '',
        location: '',
        currentConditions: '',
        forecast5Day: '',
        unitsSystem: 'Imperial',
        searchHistory: [],
        setApiKey: setApiKey,
        setSearchTerm: setSearchTerm,
        setLocation: setLocation,
        setCurrentConditions: setCurrentConditions,
        setForecast5Day: setForecast5Day,
        setUnitsSystem: setUnitsSystem
        });

    return (
        <Layout state={ state }
            routes={
                <Routes>
                    <Route index element={ <Home state={state} /> } />
                    <Route path="settings" element={<Settings state={state} />} />
                    <Route path="about" element={<About />} />
                </Routes> }>
        </Layout>
    );
}
