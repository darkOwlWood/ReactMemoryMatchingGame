import React, { useRef, useState, useEffect } from 'react';
import '../assets/styles/components/Card.scss';

const Card = ({id,cardSelected}) => {

    const [lock, setLock] = useState(false);

    const handleOnClick = () => {
        if(cardSelected.current.id){
            cardSelected.current.id===id? setLock(true) : cardSelected.current.setLock(false);
            cardSelected.current = {id: null, setLock: null};
        }else{
            setLock(true);
            cardSelected.current = {id, setLock};
        }
    }

    return (
        <div
            className="card" 
            onClick={lock? ()=>{} : handleOnClick}
        >
            { id }
        </div>
    );
}

export default Card;