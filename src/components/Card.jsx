import React, { useRef, useState, useLayoutEffect } from 'react';
import '../assets/styles/components/Card.scss';
import Config from '../config/';


const Card = ({id,gameState,setGameState,cardSelected}) => {
    
    const divEl = useRef(null);
    const [lock, setLock] = useState(false);
    
    useLayoutEffect(() => {
        cardSelected.current.boardLock = true;
        const animationArray =[
            {name:'card--fade-in', value:1000},
            {name:'card--reflect', value:1500},
        ];
        playAnimations(animationArray);
    },[]);

    function playAnimations(animationArray){
        if(animationArray.length===0){
            if(Config.CARDS_NUMBER===id){
                cardSelected.current.boardLock = false; /*UnLock the board when the last cargd end the animation */
            }
            return;
        }
        divEl.current.classList.add(animationArray[0].name);
        setTimeout(() => playAnimations(animationArray.slice(1)), animationArray[0].value);
    }

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
            ref={divEl} 
            className="wrapper"
        >
            <div
                className={`card ${lock? '' : 'card--flip'}`}
                onClick={lock? ()=>{} : handleOnClick}
            >
                <span className="card__front-face">{ id }</span>
                <span className="card__back-face"></span>
            </div>
        </div>
    );
}

export default Card;