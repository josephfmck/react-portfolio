//react 
import { Link, NavLink } from 'react-router-dom'

//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

//assets
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

//stylesheet
import './index.scss'


const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <svg 
                width="40pt" 
                height="40pt" 
                viewBox="0 0 217 217" 
                xmlns="http://www.w3.org/2000/svg">
                    <g 
                        id="svgGroup" 
                        stroke-linecap="round" 
                        fill-rule="evenodd" 
                        font-size="9pt" 
                        stroke="#ffd700" 
                        stroke-width="0.25mm"
                        fill="#ffd700" >
                        <path 
                        d="M 0 217 L 146 217 L 217 145 L 217 0 L 163 0 L 91 71.5 L 73 71.5 L 0 145 L 0 217 Z M 2 146 L 53.5 146 L 53.5 181 L 91.5 181 L 91.5 75 L 144 75 L 144 215 L 2 215 L 2 146 Z M 147 73 L 215 5 L 215 145 L 147 213 L 147 73 Z M 163 2 L 214 2 L 144 72 L 93 72 L 163 2 Z M 73 74 L 89 74 L 89 109 L 55 143 L 4 143 L 73 74 Z M 56 145 L 89 112 L 89 145 L 56 178 L 56 145 Z M 89 148 L 89 179 L 58 179 L 89 148 Z" vector-effect="non-scaling-stroke"/>
                    </g>
                </svg>
                {/* <img src={LogoS} alt="logo"></img>
                <img className='sub-logo' src={LogoSubtitle} alt="logo-subtitle"></img> */}
            </Link>

            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='portfolio-link' to='/portfolio'>
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/joe-mckinney-575b89158/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/josephfmck'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.youtube.com/'>
                        <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar