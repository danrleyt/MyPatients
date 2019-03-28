import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Info from './components/Info';
import Chat from './components/Chat';

const borderStyle = {
  border: 'solid',
  height: '100vh',
  overflowY: 'scroll'
};

const icons = {
  margin: 10,
  cursor: 'pointer'
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false // control to check if it should show the info of the patient or the messages
    };
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo(option) {
    this.setState({ showInfo: option });
  }

  render() {
    const { selected } = this.props;
    const { showInfo } = this.state;
    return (
      <div className="col m9 center" style={borderStyle}>
        <div className="header">
          <div className="row">
            <div className="col s5">
              <img
                className="circle right"
                width={50}
                height={50}
                src={selected.profilePicture}
                alt="profile"
              />
            </div>
            <div className="col s3">
              <h5 className="left">{`${selected.firstName} ${
                selected.lastName
              }`}</h5>
            </div>
            <div className="col s4">
              <FontAwesomeIcon
                style={icons}
                className="right"
                icon={faComments}
                size="2x"
                onClick={() => this.toggleInfo(false)}
              />
              <FontAwesomeIcon
                style={icons}
                className="right"
                icon={faInfoCircle}
                size="2x"
                onClick={() => this.toggleInfo(true)}
              />
            </div>
          </div>
        </div>
        {showInfo ? (
          <Info patient={selected} />
        ) : (
          <Chat messages={selected.messages} />
        )}
      </div>
    );
  }
}

export default Container;
