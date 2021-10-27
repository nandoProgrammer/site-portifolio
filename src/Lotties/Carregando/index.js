import React from 'react';
import Lottie from 'react-lottie';
import animationData from './carregando.json'

const NadaAqui = () => {

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
             />
     
    </div>
    )
}

export default NadaAqui;