import './style.scss';

import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { MapLoaded } from './MapLoaded';
import { Autocomplete } from "./Autocomplete";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
    lat: 50.43,
    lng: 30.511,
};

const libreries = ['plases'];

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libreries
    });

    return (
        <div className ="mapContainer">
            <div className="addressSearchContainer">
                <Autocomplete isLoaded = {isLoaded} />
            </div>
            {isLoaded ? <MapLoaded center={defaultCenter} /> : <h2>Loading...</h2>}
        </div>
    )
}

export { Map }
