import React from 'react';
import posterOne from '../assets/posterOne.svg';
import posterTwo from '../assets/posterTwo.svg';
import posterThree from '../assets/posterThree.svg';
import posterFour from '../assets/posterFour.svg';
import posterFIve from '../assets/posterFIve.svg';
import posterSix from '../assets/posterSix.svg';
import posterSeven from '../assets/posterSeven.svg';
import posterEight from '../assets/posterEight.svg';
import '../css/Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolioContainer">
      <div className="divImg">
        <img alt="posterOne" src={ posterOne } className="posterImg" />
        <img alt="posterTwo" src={ posterTwo } className="posterImg" />
        <img alt="posterThree" src={ posterThree } className="posterImg" />
        <img alt="posterFour" src={ posterFour } className="posterImg" />
      </div>
      <div className="divImg">
        <img alt="posterFIve" src={ posterFIve } className="posterImg" />
        <img alt="posterSix" src={ posterSix } className="posterImg" />
        <img alt="posterSeven" src={ posterSeven } className="posterImg" />
        <img alt="posterEight" src={ posterEight } className="posterImg" />
      </div>
    </section>
  );
}

export default Portfolio;
