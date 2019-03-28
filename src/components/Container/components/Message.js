import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const messageStyle = {
  backgroundColor: 'lightgrey',
  borderRadius: 10,
  padding: 5
};

const Message = props => {
  let { message } = props;
  message = JSON.parse(message);
  return (
    <div className="col s12">
      <p className="left" style={messageStyle}>
        {`${message.text} `}
        {message.read ? (
          <FontAwesomeIcon icon={faCheckDouble} size="xs" />
        ) : null}
      </p>
    </div>
  );
};

export default Message;
