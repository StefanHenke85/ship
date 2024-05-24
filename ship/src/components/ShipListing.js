// src/components/ShipListing.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ShipListing.css'; // Aktualisiere den Pfad zu CSS-Datei
import Timer from './Timer';

const ShipListing = ({ id, stufe, name, image, price, shipClass, land }) => {
  const initialTime = Math.floor(Math.random() *3600);
  return (
    <Link to={`/ship/${id}`} className="ship-listing">
      <img src={image} alt={name} className="ship-image" />
      <h2 className="ship-name">{name}</h2>
      <p className="ship-price">Preis: {price}</p>
      <p className="ship-class">Klasse: {shipClass}</p>
      <p className="ship-level">Stufe: {stufe}</p>
      <p className="ship-land">Land: {land}</p>
      < Timer initialTime={initialTime} />
    </Link>
  );
};

export default ShipListing;
