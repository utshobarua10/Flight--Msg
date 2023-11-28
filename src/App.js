import React from 'react';

import logo from './logo.svg';
import './App.css';
import ArrivedFlightTime from './components/ArrivedFlightTIme';
import DepartedFlightTime from './components/DepartedFlightTime';
import FlightMsg from './components/FlightMsg';

function App() {
  return (
    <div className="App">
     <ArrivedFlightTime></ArrivedFlightTime>
     <DepartedFlightTime></DepartedFlightTime>
     <FlightMsg></FlightMsg>
    </div>
  );
}

export default App;
