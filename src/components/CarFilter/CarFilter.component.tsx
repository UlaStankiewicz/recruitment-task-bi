import React from "react";

import "./CarFilter.scss";

const CarFilter: React.FC = () => (
    <input id="car-filter" type="search" placeholder="Filter cars..." maxLength={20}/>
);

export default CarFilter;