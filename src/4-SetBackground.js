// Create a select dropdown that updates the background color of the page when a new color is selected.
import { useState } from "react";

const SetBackgroundColor = () => {
  const [color, setColor] = useState("white");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <section>
      <h1>Set Background Color</h1>
      <div style={{ backgroundColor: color, height: "10rem" }}>
        <select name="bg-color" onChange={handleChange}>
          <option value="white">White</option>
          <option value="pink">Pink</option>
          <option value="tomato">Tomato</option>
          <option value="aquamarine">Aqua Marine</option>
        </select>
      </div>
    </section>
  );
};

export default SetBackgroundColor;
