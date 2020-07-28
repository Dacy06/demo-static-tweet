import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} /><Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string,
    gravatar: PropTypes.string,
    author: PropTypes.object.isRequired,
    likes: PropTypes.number,
    retweets: PropTypes.number,
    timestamp: PropTypes.string
  })
}

function Avatar({ hash }) {
  return <img
    src={hash}
    className="avatar"
    alt="avatar" />;
}

Avatar.propTypes = {
  hash: PropTypes.string
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string
}

function NameWithHandle({ author }) {
  const { name, handle } = author || {};
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
}
function Count({ count }) {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    )
  } else {
    return null;
  }
}

Count.propTypes = {
  count: PropTypes.number
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
}
Time.propTypes = {
  time: PropTypes.string
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    <Count count={count} />
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    <span className="like-count">
      {count ? count : null}
    </span>
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

var testTweet = {
  message: "Something about cats.",
  gravatar: "https://cdn.pixabay.com/photo/2020/07/14/15/43/church-5404699_1280.jpg",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 5,
  timestamp: "2016-07-30 21:24:37"
}

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));
