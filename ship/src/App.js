// src/App.js
import React from 'react';
import './App.css';
import ShipListing from './components/ShipListing';

const App = () => {
  const ships = [
    { land: 'Germany', name: 'V-25', image: 'https://wiki.wgcdn.co/images/thumb/d/d7/V-25_wows_main.jpg/800px-V-25_wows_main.jpg', stufe: 'I', price: '75.000 Coins', shipClass: 'Zerstörer' },
    { land: 'U.S.A', name: 'Pensacola', image: 'https://wiki.wgcdn.co/images/thumb/8/80/Pensacola_wows_main.jpg/298px-Pensacola_wows_main.jpg', stufe: 'V', price: '2.800.000 Coins', shipClass: 'Kreuzer' },
    { land: 'Frankreich', name: 'Jean Bart B', image: 'https://wiki.wgcdn.co/images/thumb/f/fc/Jean_Bart_B_wows_main.jpg/298px-Jean_Bart_B_wows_main.jpg', stufe: 'IX', price: 'Auf Anfrage', shipClass: 'Schlachtschiff' },
    { land: 'UdSSR', name: 'Chkalov B', image: 'https://wiki.wgcdn.co/images/thumb/f/f9/Chkalov_B_wows_main.jpg/298px-Chkalov_B_wows_main.jpg', stufe: 'VIII', price: '75.000 Coins', shipClass: 'Zerstörer' },
    { land: 'Japan', name: 'I-56', image: 'https://wiki.wgcdn.co/images/thumb/1/11/I-56_wows_main.jpg/298px-I-56_wows_main.jpg', stufe: 'VIII', price: '10.500', shipClass: 'U-Boot' },
    { land: 'Niederlande', name: 'Gelderland', image: 'https://wiki.wgcdn.co/images/thumb/a/a0/Gelderland_wows_main.jpg/298px-Gelderland_wows_main.jpg', stufe: 'II', price: '75.000 Coins', shipClass: 'Kreuzer' },
    { land: 'Japan', name: 'Hol Zi Ka', image: 'https://www.herder.de/-/media/images/zeitschriften/kizz/floss-aus-stoecken-und-stoff-auf-segeltour.jpg', stufe: 'XX', price: '975.000.0 Coins', shipClass: 'HolzKlasse' },

    
    // Weitere Schiffsdaten können hier hinzugefügt werden
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Henke´s Schiff Verkauf Webseite</h1>
      </header>
      <div className="ship-listings">
        {ships.map((ship, index) => (
          <ShipListing 
            key={index}
            stufe={ship.stufe} 
            name={ship.name} 
            image={ship.image} 
            price={ship.price} 
            shipClass={ship.shipClass}
            land={ship.land} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
