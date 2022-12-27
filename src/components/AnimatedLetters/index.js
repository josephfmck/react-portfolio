import './index.scss';

//class we want to apply to chars 
//arr of chars
//idx of starting point - sets delay of animation
//? letterClass is the default className and its iteration, text-animate and text-animate_#
//? idx 15 = 1.5secs delay
const AnimatedLetters = ({ letterClass, strArr, idx}) => {
    
    
    //map through creating spans
    //key = unique,  class = "text-animate _15"
    return (
        <span>
            {
                strArr.map((char, i) => (
                    <span key={char+i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;