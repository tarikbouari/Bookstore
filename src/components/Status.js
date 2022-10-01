import React from 'react';
import './status.css';

const Status = () => {
  const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  return (
    <div className="boxStatus">
      <div className="oval" />
      <div className="boxPercent">
        <span className="style.percent">
          {random}
          %
        </span>
        <span className="completed">completed</span>
      </div>
      <div className="line" />
    </div>
  );
};

export default Status;
