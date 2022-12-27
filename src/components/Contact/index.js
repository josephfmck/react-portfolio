import './index.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const strArr = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e'];


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    //hover effect for 3sec
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
    }, [])





  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArr={strArr} idx={15} letterClass={letterClass}/>
                </h1>
                <p>
                  I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using the form below either.
                </p>
                <div className='contact-form'>
                    <form>
                      <ul>
                        <li className='half'>
                          <input 
                          type='text' 
                          name="name" 
                          placeholder='Name' 
                          required/>
                        </li>
                        <li className='half'>
                          <input 
                          type='email' 
                          name="email" 
                          placeholder='Email' 
                          required/>
                        </li>
                        <li>
                          <input 
                          placeholder="Subject" 
                          type="text" 
                          name="subject" 
                          required/>    
                        </li>
                        <li>
                          <textarea 
                          placeholder='Message' 
                          name="message"></textarea>
                        </li>
                        <li>
                          <input type="submit" className='flat-button' value="SEND"></input>
                        </li>
                      </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Contact