// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ShipListing from './components/ShipListing';
import ShipDetail from './components/ShipDetail';
import MyNavbar from './components/Navbar';
import ships from './ships'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredShips = ships.filter(ship =>
    ship.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <header className="App-header">
          <h1>Schiffe aller Länder nur bei Henke</h1>
          <input
            type="text"
            placeholder="Suche nach Schiffen..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </header>
        <div className="neuste">
          <p>Neuste Schiffe</p>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="ship-listings">
                {filteredShips.map((ship, index) => (
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
