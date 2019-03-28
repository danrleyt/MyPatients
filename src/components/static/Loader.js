import React from 'react';
import '../../styles/spinner.css';

const Loader = () => {
  return (
    // I got this on http://tobiasahlin.com/spinkit/
    <div className="spinner valign-wrapper">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  );
};

export default Loader;
