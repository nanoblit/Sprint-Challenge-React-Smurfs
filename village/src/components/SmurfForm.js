import React from 'react';

const SmurfForm = ({
  addSmurf, handleInputChange, name, age, height,
}) => (
  <div className="SmurfForm">
    <form onSubmit={addSmurf}>
      <input onChange={handleInputChange} placeholder="name" value={name} name="name" />
      <input onChange={handleInputChange} placeholder="age" value={age} name="age" />
      <input onChange={handleInputChange} placeholder="height" value={height} name="height" />
      <button type="submit">Add to the village</button>
    </form>
  </div>
);

export default SmurfForm;
