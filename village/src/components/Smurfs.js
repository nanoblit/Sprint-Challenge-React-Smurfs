import React from 'react';

import Smurf from './Smurf';

const Smurfs = ({ smurfs }) => {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {smurfs.map(smurf => (
          <Smurf
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
          />
        ))}
      </ul>
    </div>
  );
};

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
