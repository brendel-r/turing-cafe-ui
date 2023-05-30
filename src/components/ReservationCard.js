import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ info }) => {
  console.log("info", info)
  return (
    <div className="reservation-card">
      <h2>{info.name}</h2>
      <p>{info.date}</p>
      <p>{info.time} pm</p>
      <p> Number of guest: {info.number}</p>
      <button className='cancel-button'>Cancel</button>
    </div>
  );
};

export default ReservationCard;