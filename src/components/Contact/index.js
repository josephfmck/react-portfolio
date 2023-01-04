import './index.scss'
import { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
//import emailJS library
import emailjs from '@emailjs/browser'
//import axios to grab keys from backend
// import axios from 'axios'

const strArr = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e'];


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    //*get reference to form 
    const refForm = useRef(); 


    //hover effect for 3sec
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
    }, [])



    // onSubmit Function to send email
    const sendEmail = (e) => {
      e.preventDefault();

      //emailJS library
      //.sendForm(serviceID, templateID, templateParams, publicKey)
      // 
      //!REPLACE LATER WITH BACKEND KEYS ENV

      //!grab keys from backend
      //!NOT USING
      // axios.get('http://localhost:8000/api/keys')
      // .then((res) => {
      //   console.log(res.data);
      // })
      // .catch((error) => {
      //   console.error(error);
      // });



      //!emailjs code APIKEYS HARDCODED
        //emailjs send email with keys from backend
        emailjs
        .sendForm(
          `service_li28y8j`,
          `template_zvs5jsa`,
          refForm.current,
          `07nMczU4ZDAWfCG72`
        )
        .then( () => {
          alert('Email Sent!')
          //reload page to reset form
          window.location.reload(false);
        }, (error) => {
          alert('Email Failed to Send. Please try again later.')
        })
        //!END emailjs code
      //!END event call
    }


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
                    <form ref={refForm} onSubmit={sendEmail}>
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