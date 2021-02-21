import React from "react";
import GoogleMapReact from 'google-map-react';

import Marker from "./components/Marker.component";
import MapProps from "./MapProps";


const Map: React.FC<MapProps> = ({carsData}) => {
    const createCarMarker = carsData.map(car => {
        return (
            <Marker
                key={car.id}
                lat={car.lat}
                lng={car.lng}
                name={car.id}
            />
        )
    });

    return (
        <div style={{height: '90%', width: '100%'}}>
            {carsData.length > 0 && (
                <GoogleMapReact
                    defaultCenter={{
                        lat: carsData[0].lat,
                        lng: carsData[0].lng
                    }}
                    defaultZoom={10}
                >
                    {createCarMarker}
                </GoogleMapReact>
            )}
        </div>
    )
}

export default Map;