import React, { useRef, useEffect } from 'react';
import '../assets/styles/components/Message.scss'
import Config from '../config';

const Message = ({setTriggerStart,startClock,stopClock}) => {

    const divEl = useRef(null);

    useEffect(() => {
        setTimeout( () => {
            stopClock();
            divEl.current.classList.add(Config.ANIMATION.FADEIN.className);
        },Config.TRANSITION.FLIP.time);
    },[]);

    const handleClick = () =>{
        divEl.current.classList.add(Config.ANIMATION.FADEOUT.className);
        setTimeout( () => {
            startClock();
            setTriggerStart(true);
        },Config.ANIMATION.FADEOUT.time);
    }

    return (
        <div 
            ref={divEl} 
            className="message"
            onClick={handleClick}
        >
            <span className="message__test-name">A MEMORY TEST OF MATCHING</span>
            <span className="message__test-author">Owl shrine</span>
            <span className="message__test-info">Click to start</span>
        </div>
    );
}

export default Message;