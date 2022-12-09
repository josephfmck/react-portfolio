import AnimatedLetters from '../AnimatedLetters';
//layouts css .about-page
import '../Layout/index.scss';
import './index.scss';


const About = () => {
    const strArr = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];
  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters strArr={[strArr]} idx={15}/>
            </h1>
            <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            </p>
            <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
            </p>
            <p>
            If I need to define myself in one sentence that would be a family
            person, a video game fanatic,
            film enthusiast, and tech-obsessed!!!
            </p>
        </div>
    </div>
  )
}

export default About