import React from 'react';
// import {
//   PhoneNumberUtil as phoneUtil,
//   PhoneNumberFormat as PNF
// } from 'google-libphonenumber';

const Info = props => {
  const { patient } = props;

  const fullName = `${patient.firstName} ${patient.lastName}`;
  const address = `${patient.address.street}, ${patient.address.city}, ${
    patient.address.zip
  }`;
  const today = new Date(); // auxiliar date to calculate age

  const diagnosisMap = {
    // map to show the attribute captalize
    depression: 'Depression',
    eatingDisorder: 'Eating Disorder',
    burnout: 'Burnout'
  };
  const treatmentMap = {
    // map to show the attribute captalize
    outpatient: 'Outpatient',
    aftercare: 'Aftercare'
  };

  return patient ? (
    <div className="row">
      <h5>Name: {fullName}</h5>
      <h5>Address: {address}</h5>
      <h5>Phone number: {patient.phoneNumber}</h5>
      <h5>
        Age: {today.getFullYear() - new Date(patient.dateOfBirth).getFullYear()}{' '}
        years old
      </h5>
      <h5>Insurance Number: {patient.insuranceNumber}</h5>
      <h5>Diagnosis: {diagnosisMap[patient.diagnosis]}</h5>
      <h5>Treatment Type: {treatmentMap[patient.treatmentType]}</h5>
      {patient.emergencyContact ? (
        <div>
          <h5>Emergency Contact </h5>
          <h5>
            {' '}
            Name:{' '}
            {`${patient.emergencyContact.firstName} ${
              patient.emergencyContact.lastName
            }`}
          </h5>
          <h5>Phone Number: {patient.emergencyContact.phoneNumber}</h5>
        </div>
      ) : null}
    </div>
  ) : null;
};

export default Info;
