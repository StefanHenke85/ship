// src/components/ShipDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ShipDetail.css';

const ShipDetail = ({ ships }) => {
  const { shipId } = useParams();
  const navigate = useNavigate();
  const ship = ships.find(s => s.id === parseInt(shipId));

  if (!ship) {
    return <div>Schiff nicht gefunden</div>;
  }

  return (
    <div className="ship-detail">
      <h1>{ship.name}</h1>
      <img src={ship.image} alt={ship.name} className="ship-image" />
      <p className="ship-price">Preis: {ship.price}</p>
      <p className="ship-class">Klasse: {ship.shipClass}</p>
      <p className="ship-level">Stufe: {ship.stufe}</p>
      <p className="ship-land">Land: {ship.land}</p>
      <p className="ship-description">Dies ist eine kurze Beschreibung des Schiffs.</p>
      <div className="buttons">
        <button onClick={() => alert('Glückwunsch zum kauf')}>Kaufen</button>
        <button onClick={() => navigate('/')}>Zurück zur Hauptseite</button>
      </div>
    </div>
  );
};

export default ShipDetail;
