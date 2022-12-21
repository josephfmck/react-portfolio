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
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass} strArr={nameArr} idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArr={jobArr} idx={22}/> 
                </h1>
                <h2>Frontend Developer / Javascript Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div> 
        <Loader type="pacman"/>
        </>
     );
}

export default Home;