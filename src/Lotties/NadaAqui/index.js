import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './nada-aqui.json'

const NadaAqui = () => {
    const [isStopped, setIsStopped] = useState(false);
    const [isPaused, setIsPaused] = useState(false);


    const buttonStyle = {
        display: 'none',
        margin: '10px auto'
      };

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
      <div>
      <Lottie options={defaultOptions}
              height={400}
              width={500}
              isStopped={isStopped}
              isPaused={isPaused}/>
      <button style={buttonStyle} onClick={() => setIsStopped(true)}>stop</button>
      <button style={buttonStyle} onClick={() => setIsStopped(false)}>play</button>
      <button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>pause</button>
    </div>
    )
}

export default NadaAqui;