import React from "react";

import "./Marker.scss";
import MarkerProps from "./MarkerProps";

const Marker: React.FC<MarkerProps> = ({name}) => (
    <div className="pin">
        <span className="location-name">{name}</span>
    </div>
)

export default Marker;