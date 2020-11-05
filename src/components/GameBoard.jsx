import React, { useState, useRef, useLayoutEffect } from 'react';
import '../assets/styles/components/GameBoard.scss';
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
    const cardSelected = useRef({id: null, setLock: null});

    useLayoutEffect(() => {
        setCardArray(shuffle(
                Array(12)
                    .fill(0)
                    .map((val,ndx) => [ndx,ndx])
                    .flat(),
                3));
    },[]);

    return (
        <div className="game-board">
            {
                cardArray.map((val,ndx) => (
                    <Card 
                        key={ndx} 
                        id={val}
                        cardSelected={cardSelected}
                    />
                ))
            }
        </div>
    );
}

export default GameBoard;