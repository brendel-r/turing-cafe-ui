import React, { Component } from 'react';
import './App.css';
import { getReservations, deleteReservation } from '../apiCalls';
import Dashboard from '../components/Dashboard';


class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: null,
      loadingStatus: {
        isLoaded: false,
        error: null
      }
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => {
        console.log(reservations); 
        this.setState({reservations, loadingStatus: {isLoaded: true}})
      })
      .catch(error => this.setState({loadingStatus: {error}}))
  }

  render() {
    const { reservations, loadingStatus } = this.state;
  
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {loadingStatus.error ? (
          <p>Error: {loadingStatus.error.message}</p>
        ) : loadingStatus.isLoaded && reservations ? (
          <Dashboard reservations={reservations} />
        ) : (
          <p>Loading...</p>
        )}
      </main>
    );
  }
}

export default App;