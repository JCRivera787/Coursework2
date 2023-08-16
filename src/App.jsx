// Write your Color component here
import React, { useState } from 'react';

const Color = (props) => {
  const handleClick = () => {
    props.setSelectedColor(props.color);
  };

  return (
    <div
      className={`color ${props.color} ${props.selectedColor === props.color ? 'selected' : ''}`}
      onClick={handleClick}
    ></div>
  );
};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="violet" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="black" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        {/* more colors can go here */}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div id="container">
      <Picker />
    </div>
  );
};

export default App;
