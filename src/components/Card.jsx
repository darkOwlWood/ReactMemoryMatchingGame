import React, { useRef, useState, useLayoutEffect } from 'react';
import '../assets/styles/components/Card.scss';
import Config from '../config/';

const Card = ({id,gameState,setGameState,cardSelected}) => {

    const [lock, setLock] = useState(false);
    
    const dontMatch = () => {
        setTimeout( () => {
            setLock(false);
            cardSelected.current.setLock(false);
            cardSelected.current = {id: null, setLock: null, boardLock: false};
        },Config.FLIP_ANIMATION + Config.WAITING_TIME);
    }
    
    const match = () => {
        cardSelected.current = {id: null, setLock: null, boardLock: false};
        setGameState({...gameState, fundedCards: ++gameState.fundedCards});
    }

    const handleOnClick = () => {
        if(!cardSelected.current.boardLock){
            if(cardSelected.current.id){ /* this can't be 0 due to the behave of JS falsy values */
                setLock(true);
                cardSelected.current.boardLock = true;
                cardSelected.current.id===id? match() : dontMatch();
            }else{
                setLock(true);
                cardSelected.current = {id, setLock, ...cardSelected};
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