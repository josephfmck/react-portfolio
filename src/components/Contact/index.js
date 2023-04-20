import './index.scss'
import { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
//import emailJS library
import emailjs from '@emailjs/browser'
//import axios to grab keys from backend
// import axios from 'axios'

//import react leaftlet for map 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

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
                I am interested in working with a company; large or small. 
                - especially those with teams working on ambitious projects. 
                </p>
                <p>
                If you have any questions, please do not hesitate to contact me 
                through automated email using this form below.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                      <ul>
                        <li className='half'>
                          <input 
                          type='text' 
                          name="name" 
                          placeholder='Your Name' 
                          required/>
                        </li>
                        <li className='half'>
                          <input 
                          type='email' 
                          name="email" 
                          placeholder='Your Email' 
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
            <div className="info-map">
              Joe McKinney
              <br/>
              Lawrence
              <br/>
              KS
              <br/>
              66046
              <span>josephfmck@gmail.com</span>
            </div>
            <div className='map-wrap'>
            <MapContainer center={[38.960213, -95.277390]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[38.960213, -95.277390]}>
                <Popup>No, I don't live in this church, just the city!</Popup>
              </Marker>
            </MapContainer>
            </div>
        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Contact