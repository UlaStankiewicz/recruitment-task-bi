import React from 'react';

import Map from "./components/Map/Map.component";
import CarFleetInfo from "./components/CarFleetInfo/CarFleetInfo.component";
import Footer from "./components/Footer/Footer.component";

function App() {
    return (
        <>
            <header>
                <h1>High-performance map updates of a fleet of cars in an organization</h1>
            </header>
            <section>
                <Map/>
            </section>
            <aside>
                <CarFleetInfo/>
            </aside>
            <Footer/>
        </>
    );
}

export default App;
