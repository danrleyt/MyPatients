import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/global.css';
import FemaleAvatar from '../../../res/female-user.png';
import MaleAvatar from '../../../res/male-user.png';

class Patient extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageError = this.handleImageError.bind(this);
    this.passPatient = this.passPatient.bind(this);
  }

  passPatient() {
    const { callback, patient } = this.props;
    callback(patient);
  }

  handleImageError(event) {
    const evt = event;
    const { patient } = this.props;
    evt.preventDefault();
    evt.target.onerror = null;
    evt.target.src = patient.gender === 'female' ? FemaleAvatar : MaleAvatar;
  }

  render() {
    const { patient } = this.props;
    const completeName = `${patient.firstName} ${patient.lastName}`;

    return (
      <div
        className="col s12 card hoverable patient"
        onClick={this.passPatient}
        role="button"
        aria-hidden
      >
        <div className="valign-wrapper ">
          <img
            className="col s3 circle "
            onError={this.handleImageError}
            src={patient.profilePicture}
            alt="profile"
          />
          <div className="col s9 valign-wrapper">
            <h5>{completeName}</h5>
            <FontAwesomeIcon
              icon={faCircle}
              color={patient.online ? 'green' : 'red'}
              pull="right"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Patient;
