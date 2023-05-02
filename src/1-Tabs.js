// Create a Tabs component in React with four city name tabs. On click of each tab show some content about that city.

import { useState } from "react";
import { v4 as uuid } from "uuid";

const tabDetails = {
  London: {
    title: "London",
    description:
      "London is the capital and largest city of England and the United Kingdom."
  },
  Paris: {
    title: "Paris",
    description: "Paris is the capital of France."
  },
  Tokyo: {
    title: "Tokyo",
    description:
      "Tokyo officially the Tokyo Metropolis, is the capital and most populous city of Japan."
  },
  NewYork: {
    title: "New York",
    description: "New York City was the capital of the United States."
  }
};

const Tabs = () => {
  const [detail, setDetail] = useState(null);
  const tabs = Object.keys(tabDetails);

  const handleClick = (city) => {
    setDetail(tabDetails[city]);
  };

  return (
    <section>
      <h1>Tabs</h1>
      <div className="tabs-container">
        <div className="tab-buttons">
          {tabs.map((item) => {
            return (
              <button key={uuid()} onClick={() => handleClick(item)}>
                {item}
              </button>
            );
          })}
        </div>
        {detail && (
          <div className="tab-details">
            <h2>{detail?.title}</h2>
            <p>{detail?.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tabs;
