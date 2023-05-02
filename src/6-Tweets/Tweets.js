// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.

import { useState, useEffect } from "react";
import { fakeFetch } from "./fakeFetch";
import TweetCard from "./TweetCard";

const Tweets = () => {
  const [tweets, setTweets] = useState(null);
  const [error, setError] = useState(null);
  const [showMoreThan50, setShowMoreThan50] = useState(false);

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/usertweets");
      if (res.status === 200) {
        setTweets(res.data);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  // To get the button name conditionally
  const btnName = showMoreThan50
    ? "Show All Tweets"
    : "Show Tweets with More than 50 Likes";

  // To get the list of tweets conditionally
  const filteredTweets = showMoreThan50
    ? tweets.filter(({ likes }) => likes > 50)
    : tweets;

  const handleClick = () => {
    setShowMoreThan50(!showMoreThan50);
  };

  return !tweets && !error ? (
    <h2>Loading Tweets...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <section>
      <button onClick={handleClick}>{btnName}</button>
      <ul style={{ listStyle: "none", width: "100%" }}>
        {filteredTweets.map((item) => (
          <TweetCard tweet={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default Tweets;
