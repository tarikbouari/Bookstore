import React from 'react';
import style from './chapter.module.css';

const Chapter = () => (
  <div>
    <span className={style.currentChapter}>
      Current Chapter
    </span>
    <span className={style.currentChapter}>
      Chapter 17
    </span>
    <button className="btn btnprimary" type="button"> UPDATE PROGRESS</button>
  </div>
);

export default Chapter;
