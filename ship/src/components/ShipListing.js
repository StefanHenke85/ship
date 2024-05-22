// src/components/ShipListing.js
import React from 'react';
import './ShipListing.css'; // Beibehaltung des Namens, wie in der Aufgabenstellung verlangt

const ShipListing = ({ name, image, price, shipClass, stufe, land }) => {
  return (
    <div className="ship-listing">
      <img src={image} alt={name} className="ship-image" />
      <h1 className="ship-name">{name}</h1>
      <h2 className="ship-land">{land}</h2>
      <p className="ship-stufe">Stufe: {stufe}</p>
      <p className="ship-price">Preis: {price}</p>
      <p className="ship-class">Klasse: {shipClass}</p>
    </div>
  );
};

export default ShipListing;

