import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import '../assets/styles/components/Card.scss';
import Config from '../config/';

const Card = ({id,image,cardSelected,gameState,setGameState,addMovement,restartMovement,setTriggerStart}) => {

    console.log('Hola');

    const divEl = useRef(null);
    const [lock, setLock] = useState(false);
    const style = {backgroundImage: `url(${image.default})`};
    
    //ANIMATION BLOCK
    //<<----------------------------------------------------->> 
    useLayoutEffect(() => {//START
        cardSelected.current.boardLock = true;
        const animationArray =  [
            {name: Config.ANIMATION.FADEIN.className,  value:Config.ANIMATION.FADEIN.time},
            {name: Config.ANIMATION.REFLECT.className, value:Config.ANIMATION.REFLECT.time},
        ];
        playAnimations(animationArray, () => cardSelected.current.boardLock = false);
    },[]);

    useEffect(() => {//END
        if(gameState.fundedCards===Config.CARDS_NUMBER){
            setTimeout(() => {
                setLock(false);
                restartMovement();
                cardSelected.current.boardLock = true;
                divEl.current.classList.add(Config.ANIMATION.FADEOUT.className);
                if(Config.CARDS_NUMBER===id){/*UnLock the board when the last card end the animation */
                    setTimeout(() => setTriggerStart(false),Config.ANIMATION.FADEOUT.time);
                }
            },Config.WAITING_TIME);
        }
    },[gameState.fundedCards]);

    function playAnimations(animationArray,callBack){
        if(animationArray.length===0){
            if(Config.CARDS_NUMBER===id){/*UnLock the board when the last card end the animation */
                callBack();
            }
            return;
        }
        divEl.current.classList.add(animationArray[0].name);
        setTimeout(() => playAnimations(animationArray.slice(1),callBack), animationArray[0].value);
    }
    //<<----------------------------------------------------->> 

    const dontMatch = () => {
        setTimeout( () => {
            setLock(false);
            cardSelected.current.setLock(false);
            cardSelected.current = {id: null, setLock: null, boardLock: false};
        },Config.TRANSITION.FLIP.time + Config.WAITING_TIME);
    }
    
    const match = () => {
        cardSelected.current = {id: null, setLock: null, boardLock: false};
        setGameState({...gameState, fundedCards: ++gameState.fundedCards});
    }

    const handleOnClick = () => {
        if(!cardSelected.current.boardLock){
            addMovement();
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
                <span className="card__front-face" style={style}></span>
                <span className="card__back-face"></span>
            </div>
        </div>
    );
}

export default Card;