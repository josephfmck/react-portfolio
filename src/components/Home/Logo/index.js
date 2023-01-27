import './index.scss';
// import LogoS from '../../../assets/images/logo-s.png';
import JLogo from '../../../assets/images/logo-s.png';

const Logo = () => {

    //*img,svg,container will start hidden
    //fadeIn with animation css 

    //solid logo IMG, transparent logo SVG 
    //*to target SVG, SVG container is in gTag
    //*logo-container: svg, img solid logo
    //*svg-container: gTag for outline logo 
    return (
        <div className='logo-container'>
            {/* <img className='solid-logo' src={JLogo} alt='solidIMG'/> */}
            <svg 
            className="solid-logo"
            width="559pt" 
            height="897pt" 
            viewBox="0 0 217 217" 
            xmlns="http://www.w3.org/2000/svg">
                <g   
                stroke="#000" 
                fill="#000" >
                    <path 
                    d="M 0 217 L 146 217 L 217 145 L 217 0 L 163 0 L 91 71.5 L 73 71.5 L 0 145 L 0 217 Z M 2 146 L 53.5 146 L 53.5 181 L 91.5 181 L 91.5 75 L 144 75 L 144 215 L 2 215 L 2 146 Z M 147 73 L 215 5 L 215 145 L 147 213 L 147 73 Z M 163 2 L 214 2 L 144 72 L 93 72 L 163 2 Z M 73 74 L 89 74 L 89 109 L 55 143 L 4 143 L 73 74 Z M 56 145 L 89 112 L 89 145 L 56 178 L 56 145 Z M 89 148 L 89 179 L 58 179 L 89 148 Z" 
                    vectorEffect="non-scaling-stroke"
                    />
                </g>
            </svg>
            
            <svg 
            width="559pt" 
            height="897pt" 
            viewBox="0 0 217 217" 
            xmlns="http://www.w3.org/2000/svg">
                <g 
                className="svg-container"
                id="svgGroup"  
                stroke="#000" 
                fill="#000" >
                    <path 
                    d="M 0 217 L 146 217 L 217 145 L 217 0 L 163 0 L 91 71.5 L 73 71.5 L 0 145 L 0 217 Z M 2 146 L 53.5 146 L 53.5 181 L 91.5 181 L 91.5 75 L 144 75 L 144 215 L 2 215 L 2 146 Z M 147 73 L 215 5 L 215 145 L 147 213 L 147 73 Z M 163 2 L 214 2 L 144 72 L 93 72 L 163 2 Z M 73 74 L 89 74 L 89 109 L 55 143 L 4 143 L 73 74 Z M 56 145 L 89 112 L 89 145 L 56 178 L 56 145 Z M 89 148 L 89 179 L 58 179 L 89 148 Z" 
                    vectorEffect="non-scaling-stroke"/>
                </g>
            </svg>
        </div>
    )
}

export default Logo;