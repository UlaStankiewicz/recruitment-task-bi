import React from "react";

import "./CarFleetInfo.scss";
import CarFleetInfoProps from "./CarFleetInfoProps";

const CarFleetInfo: React.FC<CarFleetInfoProps> = ({carsData}) => {
    const createTableRow = carsData.map(car => (
        <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.name}</td>
            <td>{car.lat}</td>
            <td>{car.lng}</td>
        </tr>
    ));

    return (
        <>
            <header>
                <h2 className="table-header">Car fleet list</h2>
            </header>
            <table>
                <thead>
                <tr>
                    <th>Car ID</th>
                    <th>Car Name</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                </tr>
                </thead>
                <tbody>
                {createTableRow}
                </tbody>
            </table>
        </>
    )
}


export default CarFleetInfo;