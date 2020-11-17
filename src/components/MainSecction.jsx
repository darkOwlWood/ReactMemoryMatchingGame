import React, { useState, useRef } from 'react';
import '../assets/styles/components/MainSecction.scss';
import InfoBox from './InfoBox';
import GameBoard from './GameBoard';
import Message from './Message';

const moveClock = (time) => {
    let [hour,minute,second] = time.split(':').map(val => Number(val));
    second = second===59? 0 : ++second;
    minute = (second===0)&&(minute===59)? 0 : second===0? ++minute : minute;
    hour = (minute===0)&&(second===0)? ++hour : hour;

    return `${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
}

const MainSecction = () => {

    const timerId = useRef(null);
    const [movements,setMovements] = useState(0);
    const [clock, setClock] = useState('00:00:00');
    const [triggerStart, setTriggerStart] = useState(false);


    const addMovements = () => {
        let movements = 0;
        return () => {
            movements+=1;
            setMovements(movements);
        }
    }
    const restardMovements = () => setMovements(0);
    
    const startClock = () => {
        let clock = '00:00:00';
        timerId.current = setInterval(() => {
            clock = moveClock(clock);
            setClock(clock);
        }, 1000);
    } 
    const stopClock = () => {
        setClock('00:00:00');
        clearInterval(timerId.current);
    }

    return (
        <div className="main-section">
            <div className="main-section__info-box">
                <InfoBox movements={movements} clock={clock}/>
            </div>
            <div className="main-section__game-container">
                {
                    triggerStart?
                    <GameBoard
                        setTriggerStart={setTriggerStart}
                        addMovements={addMovements()} 
                        restardMovements={restardMovements}
                    />
                    :<Message
                        setTriggerStart={setTriggerStart}
                        startClock={startClock}
                        stopClock={stopClock}
                    />
                }
            </div>
        </div>
    );
}

export default MainSecction;