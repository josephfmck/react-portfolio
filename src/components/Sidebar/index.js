//react 
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

//assets
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

//stylesheet
import './index.scss'


const Sidebar = () => {

    //1-4 for nav links highlight
    const [active, setActive] = useState(1)
    //mobile navigation hidden by default 
    const [showNav, setShowNav] = useState(false)


    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <svg 
                width="40pt" 
                height="40pt" 
                viewBox="0 0 217 217" 
                xmlns="http://www.w3.org/2000/svg">
                    <g  
                        stroke="#c8ff00" 
                        fill="#c8ff00" >
                        <path 
                        d="M 0 217 L 146 217 L 217 145 L 217 0 L 163 0 L 91 71.5 L 73 71.5 L 0 145 L 0 217 Z M 2 146 L 53.5 146 L 53.5 181 L 91.5 181 L 91.5 75 L 144 75 L 144 215 L 2 215 L 2 146 Z M 147 73 L 215 5 L 215 145 L 147 213 L 147 73 Z M 163 2 L 214 2 L 144 72 L 93 72 L 163 2 Z M 73 74 L 89 74 L 89 109 L 55 143 L 4 143 L 73 74 Z M 56 145 L 89 112 L 89 145 L 56 178 L 56 145 Z M 89 148 L 89 179 L 58 179 L 89 148 Z" 
                        vector-effect="non-scaling-stroke"/>
                    </g>
                </svg>
                {/* <img src={LogoS} alt="logo"></img>
                <img className='sub-logo' src={LogoSubtitle} alt="logo-subtitle"></img> */}
            </Link>

                {/* if showNav true add class .mobile-show */}
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                onClick={() => {
                    setShowNav(false)
                    setActive(1)
                }}
                className={active === 1 ? 'active' : 'nonactive'}
                exact="true" 
                to='/'
                >
                    <FontAwesomeIcon 
                    icon={faHome} 
                    color='#9da18b' 
                    />
                </NavLink>
                <NavLink 
                onClick={() => {
                    setShowNav(false)
                    setActive(2)
                }}
                exact="true" 
                className={active === 2 ? 'about-link active' : 'about-link nonactive'} 
                to='/about'
                >
                    <FontAwesomeIcon 
                    icon={faUser} 
                    color='#9da18b' 
                    />
                </NavLink>
                <NavLink 
                onClick={() => {
                    setShowNav(false)
                    setActive(3)
                }}
                exact="true" 
                className={active === 3 ? 'contact-link active' : 'contact-link nonactive'}
                to='/contact'
                >
                    <FontAwesomeIcon 
                    icon={faEnvelope} 
                    color='#9da18b' 
                    />
                </NavLink>
                <NavLink 
                onClick={() => {
                    setShowNav(false)
                    setActive(4)
                }}
                exact="true" 
                className={active === 4 ? 'portfolio-link active' : 'portfolio-link nonactive'} 
                to='/portfolio'
                >
                    <FontAwesomeIcon 
                    icon={faSuitcase} 
                    color='#9da18b' 
                    />
                </NavLink>
                {/* navigation close btn */}
                <FontAwesomeIcon
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#c8ff00"
                size="3x"
                className='close-icon'
                />
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/joe-mckinney-575b89158/'>
                        <FontAwesomeIcon 
                        icon={faLinkedin} 
                        color='#9da18b'
                        />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/josephfmck'>
                        <FontAwesomeIcon 
                        icon={faGithub} 
                        color='#9da18b'
                        />
                    </a>
                </li>
            </ul>
            {/* Mobile Hamburger Menu */}
                <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#c8ff00"
                size="3x"
                className='hamburger-icon'
                />
        </div>
    )
}

export default Sidebar