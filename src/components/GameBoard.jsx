import React, { useState, useRef, useLayoutEffect } from 'react';
import '../assets/styles/components/GameBoard.scss';
import Card from './Card';
import Config from '../config';

function importAll(context) {
    let images = {};
    context.keys().map((item, index) => { images[item.replace('./', '')] = context(item); });
    return images;
}
const images = importAll(require.context('../assets/static/zeldaMemory', false, /\.(png)$/));

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

const GameBoard = ({addMovement,restartMovement,setTriggerStart}) => {

    const [gameState, setGameState] = useState({cardArray:[] ,fundedCards:0});
    const cardSelected = useRef({id:null, setLock:null, boardLock:false});

    useLayoutEffect(() => {
        const cardArray = shuffle(
                Array(Config.CARDS_NUMBER)
                    .fill(0)
                    .map((val,ndx) => [{id:ndx+1, bg:images[Config.CARD_PICTURE[ndx]]},{id:ndx+1, bg:images[Config.CARD_PICTURE[ndx]]}])
                    .flat(),
                3);
        setGameState({...gameState, cardArray});
    },[]);

    return (
        <div className="game-board">
            {
                gameState.cardArray.map((obj,ndx) => (
                    <Card 
                        key={ndx}
                        id={obj.id}
                        image={obj.bg}
                        cardSelected={cardSelected}
                        gameState={gameState}
                        setGameState={setGameState}
                        addMovement={addMovement}
                        restartMovement={restartMovement}
                        setTriggerStart={setTriggerStart}
                    />
                ))
            }
        </div>
    );
}

export default GameBoard;