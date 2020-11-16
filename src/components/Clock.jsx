import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Clock.scss';

const Clock = ({clock}) => {

    const [gameTime, setGameTime] = useState({current:0, minimun:0});

    useEffect(() => {
        if(!clock){
            const minimun = (gameTime.current<gameTime.minimun)||(gameTime.minimun===0)?
                    gameTime.current
                    :gameTime.minimun;
            setGameTime({current:0, minimun});
        }else{
            setGameTime({...gameTime, current:clock});
        }
    },[clock]);

    return (
        <div className="clock">
            <span>Current Time: {gameTime.current}</span>
            <span>Minimun Time: {gameTime.minimun}</span>
        </div>
    );
}

export default Clock;