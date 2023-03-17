import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import Home from './components/Home'
import Settings from './components/Settings'
import About from './components/About'
import '../node_modules/weather-icons/css/weather-icons.min.css';
import './custom.css';

export default function App() {
    const [apiKey, setApiKey] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [currentConditions, setCurrentConditions] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

  var displayName = App.name;

    return (
        <Layout
            apiKey={apiKey}
            searchTerm={searchTerm}
            location={location}
            currentConditions={currentConditions}
            setApiKey={setApiKey}
            setSearchTerm={setSearchTerm}
            searchHistory={searchHistory}
            routes={
                <Routes>
                    <Route index element={
                        <Home
                            apiKey={apiKey}
                            searchTerm={searchTerm}
                            location={location}
                            currentConditions={currentConditions} />
                    } />
                    <Route path="settings" element={<Settings apiKey={apiKey} setApiKey={setApiKey} />} />
                    <Route path="about" element={<About />} />
                </Routes> }>
        </Layout>
    );
}
