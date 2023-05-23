import './Presentation.css'
import MyImage from '../MyImage/MyImage'
import useTyped from '../hooks/useTyped';
import { useRef } from 'react';


const COLOR = "#2ccb69";

const options = {
  strings: [
    `I code cool <span style='color: ${COLOR}'>web apps</span>`,
    `I develop <span style='color: ${COLOR}'>mobile apps</span>`,
    `I code <span style='color: ${COLOR}'>smartcontracts</span>`,
    `I develop <span style='color: ${COLOR}'>dapps</span>`,
    `I code scalable <span style='color: ${COLOR}'>backends</span>`,
    `I love <span style='color: ${COLOR}'>javascript</span>`,
    `I love <span style='color: ${COLOR}'>web3</span>`,
    `I love <span style='color: ${COLOR}'>blockchain</span>`,
  ],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
};

function Presentation() {
  const ref = useRef(null);
  useTyped(ref, options);
  return (
      <div className='container-presentation'>
        <div className='container-text'>  
          <div className='ola'>
            <h1>Luís Fernando</h1>
            <span className='typing' ref={ref}/>
          </div>
          <div className='presentation-text'>
            <p>I am a <span className='name'>Front End Developer</span> who focuses on wrighting clean, elegant and efficient code.</p>
          </div>
        </div>
        <MyImage/>
      </div>
  )
}

export default Presentation