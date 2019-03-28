import React from 'react';
import Message from './Message';

const Chat = props => {
  const { messages } = props;
  return (
    <div className="row">
      <div className="messages">
        {messages
          ? messages.map(message => <Message message={message} />)
          : null}
      </div>
      <div className="input">
        <textarea id="textarea1" className="materialize-textarea" />{' '}
        {/* to be implemented */}
      </div>
    </div>
  );
};

export default Chat;
