import React from 'react';
import Patient from './Patient';

const borderStyle = {
  border: 'solid',
  height: '100vh'
};

const List = props => {
  const { objects, callback } = props;
  return (
    <div className="col s12 m3" style={borderStyle}>
      <div className="row">
        {objects.map(value => {
          return (
            <Patient
              key={value.phoneNumber}
              patient={value}
              callback={callback}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
