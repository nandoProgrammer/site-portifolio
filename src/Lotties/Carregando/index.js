import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './carregando.json'

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
     
    </div>
    )
}

export default NadaAqui;