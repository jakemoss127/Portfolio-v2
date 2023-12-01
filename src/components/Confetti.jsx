import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';


const Confetti = ({doConfetti}) => {
    const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    
const detectSize = () => {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
}

useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
        window.removeEventListener('resize', detectSize);
    }
}, [windowDimensions])

    return (
        <div>
            {
                doConfetti && <ReactConfetti
                    width={windowDimensions.width}
                    height={windowDimensions.height}
                />
            }
        </div>
    )
}

export default Confetti