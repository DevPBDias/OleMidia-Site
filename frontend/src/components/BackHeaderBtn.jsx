import React from 'react';
import backBtn from '../assets/back-arrow.png';
import '../css/BackHeaderBtn.css';

function BackHeaderBtn() {
  return (
    <a className="backBtn" href="#header">
      <img className="backBtnIcon" alt="backBtn" src={ backBtn } />
    </a>
  );
}

export default BackHeaderBtn;
