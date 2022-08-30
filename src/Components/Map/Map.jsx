import './style.scss';
import { GoogleMap } from '@react-google-maps/api';
import React from 'react';
import { defaultTheme } from './Theme'



const containerStyle = {
    width: '100%',
    height: '100%'
};


const Map = ({ center }) => {

    const defaultOptions = {
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        clickableIcons: false,
        keyboardsShortcuts: false,
        scrollwheel: true,
        disableDobleClickZoom: false,
        fullscreenControl: false,
        styles: defaultTheme,
    }

    const mapRef = React.useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    return (
        <div className="maps">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </div>
    )
}

export { Map }
