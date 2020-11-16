import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Movement.scss';

const Movement = ({movements}) => {

    const [gameMoves,setMovements] = useState({minumun:0, current:0});

    useEffect(() => {
        if(!movements){
            const minumun = (gameMoves.current<gameMoves.minumun)||(gameMoves.minumun===0)? 
                                gameMoves.current
                                :gameMoves.minumun; 
            setMovements({minumun, current:0});
        }else{
            setMovements({...gameMoves, current:movements});
        }
    },[movements]);

    return (
        <div className="movements">
            <span>Current moves {gameMoves.current}</span>
            <span>Min. moves {gameMoves.minumun}</span>

        </div>
    );
}

export default Movement;