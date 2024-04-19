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
            console.log(port);
            console.log(port.cover);
            return (
              <div className='image-box' key={idx}>
                <img 
                className="portfolio-image"
                src={process.env.PUBLIC_URL + '/' + port.cover}
                alt={port.title} />
                <div className='content'>
                  <p className='title'>{port.title}</p>
                  <h4 className='description'>{port.description}</h4>
                  <button 
                  className='btn'
                  onClick={() => {window.open(port.url)}}>
                  View
                  </button>
                </div>
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
        <div className='text-zone'>
          <h1 className='page-title'>
            <AnimatedLetters letterClass={letterClass} strArr={"Portfolio".split("")} idx={15}/>
          </h1>
        </div>
        <div className='projects-container'>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type='pacman'/>
    </>
  )
}

export default Portfolio