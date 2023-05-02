export const Chats = ({ chats }) => {
  return (
    <section>
      <h1>Chat Room</h1>
      <div>
        <ul style={{ listStyle: "none" }}>
          {chats.map((item, i) => {
            return (
              <li key={i}>
                {i % 2 === 0 ? "user: " : "You: "}
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
