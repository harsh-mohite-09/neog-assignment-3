// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.

import { useState } from "react";
import { v4 as uuid } from "uuid";

const GroceryList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleClick = () => {
    if (text.length > 0) {
      setList([...list, { id: uuid(), content: text }]);
      setText("");
    }
  };

  const handleCheckbox = (myId) => {
    const completedItem = list.find(({ id }) => id === myId);
    setCompleted([...completed, completedItem]);
    setList(list.filter(({ id }) => id !== myId));
  };

  return (
    <section>
      <h1>GroceryList</h1>
      <div>
        <label>Add item: </label>
        <input
          type="text"
          value={text}
          placeholder="Enter item name"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
        <ul style={{ width: "fit-content", margin: "auto" }}>
          {list.map((item) => {
            const { id, content } = item;
            return (
              <li key={id} style={{ textAlign: "left" }}>
                <input
                  type="checkbox"
                  id={id}
                  onChange={() => handleCheckbox(id)}
                />
                <label htmlFor={id}>{content}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Completed List</h2>
        <ul style={{ width: "fit-content", margin: "auto" }}>
          {completed.map((item) => {
            const { id, content } = item;
            return (
              <li style={{ textAlign: "left" }} key={id}>
                <span>{content}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default GroceryList;
