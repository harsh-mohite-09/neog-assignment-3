const TweetCard = ({ tweet }) => {
  const { content, likes, views } = tweet;
  return (
    <li className="tweet-card">
      <h2>{content}</h2>
      <div>
        <span>Likes: {likes}</span> <span>Views: {views}</span>
      </div>
    </li>
  );
};

export default TweetCard;
