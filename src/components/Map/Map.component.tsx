import React from "react";

import "./Map.scss";

const Map: React.FC = () => {
    return (
        <>
            <input id="car-filter" type="search" placeholder="Filter cars..." />
            <div>Here will be map</div>
        </>
    );
}

export default Map;