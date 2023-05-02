// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.

import { useState, useEffect } from "react";
import { fakeFetch } from "./fakefetch";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
import { Chats } from "./components/Chats";

const ChatRoom = () => {
  const [chats, setChats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/userchats");
      if (res.status === 200) {
        setChats(res.data);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return !chats && !error ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <Chats chats={chats} />
  );
};

export default ChatRoom;
