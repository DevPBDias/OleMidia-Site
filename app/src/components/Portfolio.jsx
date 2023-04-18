import React from 'react'
import posterOne from '../assets/posterOne.svg'
import posterTwo from '../assets/posterTwo.svg'
import posterThree from '../assets/posterThree.svg'
import posterFour from '../assets/posterFour.svg'
import posterFIve from '../assets/posterFIve.svg'
import posterSix from '../assets/posterSix.svg'
import posterSeven from '../assets/posterSeven.svg'
import posterEight from '../assets/posterEight.svg'
import '../css/Portfolio.css';

function Portfolio() {
  return (
    <section id="skills" class="portfolioContainer">
    <div class="divImg">
        <img alt="posterOne" src={posterOne} class="posterImg" />
        <img alt="posterTwo" src={posterTwo} class="posterImg" />
        <img alt="posterThree" src={posterThree} class="posterImg" />
        <img alt="posterFour" src={posterFour} class="posterImg" />
    </div>
    <div class="divImg">
        <img alt="posterFIve" src={posterFIve} class="posterImg" />
        <img alt="posterSix" src={posterSix} class="posterImg" />
        <img alt="posterSeven" src={posterSeven} class="posterImg" />
        <img alt="posterEight" src={posterEight} class="posterImg" />
    </div>
</section>
  )
}

export default Portfolio