import './Presentation.css'
import MyImage from '../MyImage/MyImage'
import useTyped from '../hooks/useTyped';
import { useRef } from 'react';


const COLOR = "#2ccb69";

const options = {
  strings: [
    `I code cool <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>web apps</span>`,
    `I love <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>javascript</span>`,
    `I love <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>web3</span>`,
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
};

function Presentation() {
  const ref = useRef(null);
  useTyped(ref, options);
  return (
    <>
      <div className='container-presentation'>
        <div className='container-text'>  
          <div className='ola'>
            <h1>Luís Fernando</h1>
            <span className='typing' ref={ref}/>
          </div>
          <div className='presentation-text'>
            <p>I am a <span className='name'>Front End Developer</span> who focuses on writhing</p>
            <p>clean, elegant and efficient code.</p>
          </div>
        </div>
    </div>
        <MyImage/>
    </>
  )
}

export default Presentation