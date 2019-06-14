import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  const getSmurfs = async () => {
    try {
      const res = await axios.get('http://localhost:3333/smurfs');
      setSmurfs(res.data);
      console.log(smurfs);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getSmurfs();
  }, []);

  // add any needed code to ensure that the smurfs collection exists on state and it has data
  // coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  return (
    <div className="App">
      <SmurfForm />
      <Smurfs smurfs={smurfs} />
    </div>
  );
};

export default App;
