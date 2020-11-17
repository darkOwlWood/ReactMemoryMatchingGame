import React, { useState, useEffect } from 'react';
import '../assets/styles/components/GameStat.scss';

const GameStat = ({gameData, className, statName, startValue}) => {

    const [gameStat,setGameStat] = useState({minumun:startValue, current:startValue});

    useEffect(() => {
        if(gameData===startValue){
            const minumun = (gameStat.current<gameStat.minumun)||(gameStat.minumun===startValue)? 
                                gameStat.current
                                :gameStat.minumun; 
            setGameStat({minumun, current:startValue});
        }else{
            setGameStat({...gameStat, current:gameData});
        }
    },[gameData]);

    return (
        <div className={`game-stat ${className}`}>
            <span>Best {statName}: {gameStat.minumun}</span>
            <span>Current {statName}: {gameStat.current}</span>
        </div>
    );
}

export default GameStat;