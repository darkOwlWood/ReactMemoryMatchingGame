import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import '../assets/styles/components/GameBoard.scss';
import Card from './Card';
import Message from './Message';
import Config from '../config';

const shuffle = (array,pass) => {
    const array_copy = array.slice();
    const length = array_copy.length;

    array_copy.forEach((val,ndx,arr) => {
        const ndxR = Math.floor(Math.random()*length);
        arr[ndx] = arr[ndxR];
        arr[ndxR] = val;
    });

    return pass===1? array_copy:shuffle(array_copy,pass-1);
}

const GameBoard = () => {

    const [triggerStart, setTriggerStart] = useState([0]);
    const [gameState, setGameState] = useState({cardArray:[] ,fundedCards:0});
    const cardSelected = useRef({id:null, setLock:null, boardLock:false});

    useEffect(() => {
        if(triggerStart[0]===1){
            const cardArray = shuffle(
                    Array(Config.CARDS_NUMBER)
                        .fill(0).map((val,ndx) => [ndx+1,ndx+1]).flat(),
                    3);
            setGameState({...gameState, cardArray});
        }
    },[triggerStart]);

    return (
        <div className="game-board">
            {
                gameState.cardArray.length!==0?
                gameState.cardArray.map((val,ndx) => (
                    <Card 
                        key={ndx}
                        id={val}
                        gameState={gameState}
                        setGameState={setGameState}
                        cardSelected={cardSelected}
                    />
                ))
                :<Message setTriggerStart={setTriggerStart}/>
            }
        </div>
    );
}

export default GameBoard;