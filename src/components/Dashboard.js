import React from "react";
import { getReservations } from "../apiCalls";
import './Dashboard.css';
import ReservationCard from './ReservationCard';

const Dashboard = ({reservations}) => {
  console.log("help", reservations)
  const cards = reservations.map(reservation => (
    <ReservationCard
      key={reservation.id}
      info={reservation}/>
  ))

  return (
    <section className="dashboard">
      { cards }
    </section>
  )
}

export default Dashboard;
