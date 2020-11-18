import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/components/InfoBox.scss';
import GameStat from './GameStat';

const moveTime = (time) => {
    let [hour,minute,second] = time.split(':').map(val => Number(val));
    second = second===59? 0 : ++second;
    minute = (second===0)&&(minute===59)? 0 : second===0? ++minute : minute;
    hour = (minute===0)&&(second===0)? ++hour : hour;

    return `${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
}

const InfoBox = ({setGameStat}) => {

    const timerId = useRef(null);
    const [movement,setMovement] = useState(0);
    const [time, setTime] = useState('00:00:00');

    useEffect(() => {
        const time = {
            add: startTime,
            restart: stopTime,
        };
        const movement = {
            add: addMovement,
            restart: restardMovement,
        };
        setGameStat({time, movement});
    },[]);

    function addMovement(){
        let movement = 0; 
        return () => {
            movement+=1
            setMovement(movement);
        }
    }

    function restardMovement(){ setMovement(0) }

    function startTime(){
        let time = '00:00:00';
        timerId.current = setInterval(() => {
            time = moveTime(time);
            setTime(time);
        }, 1000);
    }

    function stopTime(){
        setTime('00:00:00');
        clearInterval(timerId.current);
    }

    return (
        <div className="info-box">
            <GameStat 
                gameData={movement}
                className={'movement'}
                statName={'moves'}
                startValue={0}
            />
            <GameStat
                gameData={time}
                className={'time'}
                statName={'time'}
                startValue={'00:00:00'}
            />
        </div>
    );
}

export default InfoBox;