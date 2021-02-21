import React from "react";

import "./CarFleetInfo.scss";

const CarFleetInfo: React.FC = () => (
    <>
        <header>
            <h2 className="table-header">Car fleet list</h2>
        </header>
        <table>
            <thead>
            <tr>
                <th>Car ID</th>
                <th>Latitude</th>
                <th>Longitude</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
            </tr>
            <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
            </tr>
            </tbody>
        </table>
    </>
)


export default CarFleetInfo;