import React, { useRef, useState, useLayoutEffect } from 'react';
import '../assets/styles/components/Card.scss';
import Config from '../config/';

const Card = ({id,cardSelected,gameState,setGameState,boardLock}) => {

    const [lock, setLock] = useState(false);
    
    const dontMatch = () => {
        setTimeout( () => {
            setLock(false);
            cardSelected.current.setLock(false);
            boardLock.current = false;
            cardSelected.current = {id: null, setLock: null};
        },Config.FLIP_ANIMATION + Config.WAITING_TIME);
    }
    
    const match = () => {
        boardLock.current = false;
        cardSelected.current = {id: null, setLock: null};
        setGameState({fundedCards: gameState.fundedCards+1});
    }

    const handleOnClick = () => {
        console.log(boardLock.current); /* --- */
        if(!boardLock.current){
            if(cardSelected.current.id){ /* this can't be 0 due to the behave of JS falsy values */
                setLock(true);
                boardLock.current = true;
                cardSelected.current.id===id? match() : dontMatch();
            }else{
                setLock(true);
                cardSelected.current = {id, setLock};
            }
        }
    }

    return (
        <div
            className={`card ${lock? '' : 'card--back-face-flip'}`}
            onClick={lock? ()=>{} : handleOnClick}
        >
            <span className="card__front-face">{ id }</span>
            <span className="card__back-face"></span>
        </div>
    );
}

export default Card;