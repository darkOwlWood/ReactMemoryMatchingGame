import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import '../assets/styles/components/GameBoard.scss';
import Config from '../config';
import Card from './Card';

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

    const [cardArray, setCardArray] = useState([]);
    const [gameState, setGameState] = useState({fundedCards: 0});
    const boardLock = useRef(false);
    const cardSelected = useRef({id: null, setLock: null});

    useEffect(() => {
        setCardArray(shuffle(
                Array(Config.CARDS_NUMBER)
                    .fill(0)
                    .map((val,ndx) => [ndx+1,ndx+1])
                    .flat(),
                3));
        setGameState({fundedCards: 0});
    },[]);

    return (
        <div className="game-board">
            {
                cardArray.map((val,ndx) => (
                    <Card 
                        key={ndx}
                        id={val}
                        cardSelected={cardSelected}
                        gameState={gameState}
                        setGameState={setGameState}
                        boardLock={boardLock}
                    />
                ))
            }
        </div>
    );
}

export default GameBoard;