// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ShipListing from './components/ShipListing';
import ShipDetail from './components/ShipDetail';
import ships from './ships'; 


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Schiffe aller Länder nur bei Henke</h1>
        </header>
        <div className ="neuste">
        <p>Neuste Schiffe</p>
        </div>


        <Routes>
          <Route
            path="/"
            element={
              <div className="ship-listings">
                {ships.map((ship, index) => (
                  <ShipListing
                    key={index}
                    id={ship.id}
                    stufe={ship.stufe}
                    name={ship.name}
                    image={ship.image}
                    price={ship.price}
                    shipClass={ship.shipClass}
                    land={ship.land}
                  />
                ))}
              </div>
            }
          />
          <Route path="/ship/:shipId" element={<ShipDetail ships={ships} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
