// Create a slider input in React which will set the border radius of a card on a change in the value of the range.

import { useState } from "react";

const Card = () => {
  const [radius, setRadius] = useState(0);

  const handleChange = (e) => {
    setRadius(e.target.value);
  };

  return (
    <section>
      <div className="card" style={{ borderRadius: `${radius}px` }}>
        <h1>Card with Rounded Corners</h1>
        <label htmlFor="">Border Radius: </label>
        <input
          type="range"
          min="0"
          max="100"
          value={radius}
          onChange={handleChange}
        />
        <span>{radius}px</span>
      </div>
    </section>
  );
};

export default Card;
