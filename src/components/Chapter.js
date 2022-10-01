import React from 'react';
import style from './chapter.module.css';

const Chapter = () => (
  <div className={style.boxchapter}>
    <span className={style.currentChapter}>
      Current Chapter
    </span>
    <span className={style.chapter}>
      Chapter 17
    </span>
    <button className="btn btn-primary" type="button"> UPDATE PROGRESS</button>
  </div>
);

export default Chapter;
