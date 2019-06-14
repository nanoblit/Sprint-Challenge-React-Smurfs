import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  const [inputData, setInputData] = useState({ name: '', age: '', height: '' });
  const smurfsUrl = 'http://localhost:3333/smurfs';

  const getSmurfs = async () => {
    try {
      const res = await axios.get(smurfsUrl);
      setSmurfs(res.data);
      console.log(smurfs);
    } catch (err) {
      console.log(err.message);
    }
  };

  const postSmurf = async () => {
    try {
      await axios.post(smurfsUrl, inputData);
      getSmurfs();
      console.log(smurfs);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getSmurfs();
  }, []);

  const addSmurf = e => {
    e.preventDefault();
    postSmurf();
    setInputData({ name: '', age: '', height: '' });
  };

  const handleInputChange = e => {
    const newData = { ...inputData };
    newData[e.target.name] = e.target.value;
    setInputData(newData);
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data
  // coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  return (
    <div className="App">
      <SmurfForm
        addSmurf={addSmurf}
        handleInputChange={handleInputChange}
        name={inputData.name}
        age={inputData.age}
        height={inputData.height}
      />
      <Smurfs smurfs={smurfs} />
    </div>
  );
};

export default App;
