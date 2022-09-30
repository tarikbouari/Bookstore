import React from 'react';
import style from './status.module.css';

const Status = () => (
  <div className={style.boxStatus}>
    <div className="oval" />
    <div className={style.boxPercent}>
      <span className="-Percent-Complete">64%</span>
      <span className="Complete">completed</span>
    </div>
  </div>
);

export default Status;
