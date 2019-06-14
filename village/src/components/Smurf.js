import React from 'react';

const Smurf = ({ name, height, age }) => (
  <div className="Smurf">
    <h3>{name}</h3>
    <strong>{height} tall</strong>
    <p>{age} smurf years old</p>
  </div>
);

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;
