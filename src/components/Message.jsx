import React, { useRef, useEffect } from 'react';
import '../assets/styles/components/Message.scss'
import Config from '../config';

const Message = ({setTriggerStart}) => {

    const divEl = useRef(null);

    useEffect(() => {
        setTimeout( () => {
            divEl.current.classList.add(Config.ANIMATION.FADEIN.className);
        },Config.TRANSITION.FLIP.time);
    },[]);

    const handleClick = () =>{
        divEl.current.classList.add(Config.ANIMATION.FADEOUT.className);
        setTimeout( () => {
            setTriggerStart([1]);
        },Config.ANIMATION.FADEOUT.time);
    }

    return (
        <div 
            ref={divEl} 
            className="message"
            onClick={handleClick}
        >
            Haz click
        </div>
    );
}

export default Message;