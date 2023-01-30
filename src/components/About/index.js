import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
//layouts css .about-page
import '../Layout/index.scss';
import './index.scss';
//fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
//loader react library
import Loader from 'react-loaders';

const About = () => {
  const strArr = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];
  const [letterClass, setLetterClass] = useState('text-animate');

  //hover effect for 3sec
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, [])


  return (<>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArr={strArr} idx={15}/>
            </h1>
            <p>
            Software Developer devoted to the craft of building beautifully designed 
            functional websites and web applications.
            </p>
            <p>
            I am currently looking forward to finding a company that will allow me 
            to further develop my skills and career.
            </p>
            <p>
            My interests are engrossed in everything technology and business related, 
            and my hobbies on the weekend tend to be about 
            video games, film, and new ideas that pop out at me.
            </p>
        </div>

        <div className='stage-cube-container'>
           <div className='cubespinner'>
              <div className='face1'>
                <FontAwesomeIcon icon={faNodeJs} color="#3C873A"/>
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
    <Loader type="pacman"/>
    </>
  )
}

export default About