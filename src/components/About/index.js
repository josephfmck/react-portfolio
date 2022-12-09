import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
//layouts css .about-page
import '../Layout/index.scss';
import './index.scss';
//fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const strArr = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];
  const [letterClass, setLetterClass] = useState('text-animate');

  //hover effect for 3sec
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  })


  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArr={strArr} idx={15}/>
            </h1>
            <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            </p>
            <p>
            I'm quite confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
            </p>
            <p>
            If I need to define myself in one sentence that would be a family
            person, a video game fanatic,
            film enthusiast, and tech-obsessed!!!
            </p>
        </div>

        <div className='stage-cube-container'>
           <div className='cubespinner'>
              <div className='face1'>
                <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
              </div>
              <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
              </div>
              <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
              </div>
              <div className='face4'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
              </div>
              <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
              </div>
              <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
              </div>
           </div>
        </div>
    </div>
  )
}

export default About