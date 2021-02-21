import React, {useEffect, useState} from 'react';

import "./App.scss";
import CarFilter from "./components/CarFilter/CarFilter.component";
import Map from "./components/Map/Map.component";
import CarFleetInfo from "./components/CarFleetInfo/CarFleetInfo.component";
import Footer from "./components/Footer/Footer.component";
import CarDataProps from "./interfaces/CarDataProps";

const App: React.FC = () => {
    const [carsData, setCarsData] = useState<CarDataProps[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/cars')
            .then(response => response.json())
            .then(data => setCarsData(data))
    }, []);

    return (
        <div className="grid-container">
            <header className="header-item">
                <h1>High-performance map updates of a fleet of cars in an organization</h1>
            </header>
            <main className="main-item">
                <section className="section-1">
                    <CarFilter/>
                    <Map carsData={carsData}/>
                </section>
                <aside className="aside-1">
                    <CarFleetInfo carsData={carsData}/>
                </aside>
            </main>
            <Footer customClassName="footer-item"/>
        </div>
    );
}

export default App;
