import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss'
//loader react library
import Loader from 'react-loaders';

const Home = () => {
    //*State
        //animated text, "text-animate" is the className, doesnt have any css by default, just used to recognize class
        //set will be for hover "text-animate-hover"
    const [letterClass, setLetterClass] = useState('text-animate');
        //words on page
    const nameArr = ['o', 'e', ' ', 'M', 'c', 'K', 'i', 'n', 'n', 'e', 'y'];
    const jobArr = 'Software Developer.'.split("");
    console.log({nameArr, jobArr});



    //*useEffect
        //hover effect on animated text
        //?setTimeout updates class from "text-animate" to "text-animate-hover" after 4s
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);


    //*Render
        //letters broken into animated spans
        //idx _# part of class sets delay for letters, 12 = 1.2s 
        //? Hi, -> is manually made, while <AnimatedLetters/> is dynamic
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    {/* <img src={LogoTitle} alt="jLetter"/> */}
                    <svg 
                        width="40pt" 
                        height="40pt" 
                        viewBox="0 0 217 217" 
                        xmlns="http://www.w3.org/2000/svg">
                        <g 
                            id="svgGroup"   
                            stroke="#c8ff00"
                            fill="#c8ff00" >
                                <path 
                                d="M 0 217 L 146 217 L 217 145 L 217 0 L 163 0 L 91 71.5 L 73 71.5 L 0 145 L 0 217 Z M 2 146 L 53.5 146 L 53.5 181 L 91.5 181 L 91.5 75 L 144 75 L 144 215 L 2 215 L 2 146 Z M 147 73 L 215 5 L 215 145 L 147 213 L 147 73 Z M 163 2 L 214 2 L 144 72 L 93 72 L 163 2 Z M 73 74 L 89 74 L 89 109 L 55 143 L 4 143 L 73 74 Z M 56 145 L 89 112 L 89 145 L 56 178 L 56 145 Z M 89 148 L 89 179 L 58 179 L 89 148 Z" 
                                vectorEffect="non-scaling-stroke"/>
                        </g>
                    </svg>
                    <AnimatedLetters letterClass={letterClass} strArr={nameArr} idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArr={jobArr} idx={22}/> 
                </h1>
                <h2>Software Developer / Javascript Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div> 
        <Loader type="pacman"/>
        </>
     );
}

export default Home;