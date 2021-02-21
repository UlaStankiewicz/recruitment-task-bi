import React from "react";
import GoogleMapReact from 'google-map-react';

import Marker from "./components/Marker.component";

const Map: React.FC = () => {
    const defaultProps = {
        center: {
            lat: 51.759445,
            lng: 19.457216
        },
        zoom: 11
    };

    return (
        <div style={{height: '90%', width: '100%'}}>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={51.759445}
                    lng={19.457216}
                    name='1'
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map;