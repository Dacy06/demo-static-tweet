import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar /> 
      <div className="content">
        <NameWithHandle/>
        <Message/>
      </div>
    </div>
  );
}

function Avatar(){
  return <img
   src="https://cdn.pixabay.com/photo/2020/07/14/15/43/church-5404699_1280.jpg"
   className="avatar"
   alt="avatar" />;
}

function Message(){
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
  );
}

function NameWithHandle(){
  return (
    <span className="name-with-handle">
      <span className="name">Your name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

ReactDOM.render(<Tweet />, document.querySelector('#root'));
