import React, { useState, useRef } from 'react';
import '../assets/styles/components/MainSecction.scss';
import GameBoard from './GameBoard';
import InfoBox from './InfoBox';

const MainSecction = () => {

    const [movements,setMovements] = useState(0);
    const [clock, setClock] = useState(0);
    const timerId = useRef(null);

    const addMovements = () => setMovements(movements+1);
    const restardMovements = () => setMovements(0);
    

    const startClock = () => {
        let clock = 0;
        timerId.current = setInterval(() => {
            clock+=1;
            setClock(clock);
        }, 1000);
    } 
    const stopClock = () => {
        setClock(0);
        clearInterval(timerId.current);
    }


    return (
        <div className="main-section">
            <div className="main-section__info-box">
                <InfoBox movements={movements} clock={clock}/>
            </div>
            <div className="main-section__game-container">
                <GameBoard 
                    addMovements={addMovements} 
                    restardMovements={restardMovements}
                    startClock={startClock}
                    stopClock={stopClock}
                />
            </div>
        </div>
    );
}

export default MainSecction;