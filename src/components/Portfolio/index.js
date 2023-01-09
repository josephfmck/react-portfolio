import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json';

//styles
import '../Layout/index.scss';
import './index.scss';

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  console.log(portfolioData);

  //maps through data and renders portfolio items
  const renderPortfolio = (portfolioDataArr) => {
    return (
      <div className='images-container'>
        {
          portfolioDataArr.map((port, idx) => {
            return (
              <div className='image-box' key={idx}>
                <img 
                className="portfolio-image"
                src={port.cover} 
                alt={port.title} />
              </div>
            )
          })
        }
      </div>
    );
  }

  //hover effect for 3sec
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, [])


  return (
    <>
      <div className="container portfolio-page">
          <h1 className='page-title'>
            <AnimatedLetters letterClass={letterClass} strArr={"Portfolio".split("")} idx={15}/>
          </h1>
          <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type='pacman'/>
    </>
  )
}

export default Portfolio