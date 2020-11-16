import React, { useState } from 'react';
import '../assets/styles/components/MainSecction.scss';
import GameBoard from './GameBoard';
import InfoBox from './InfoBox';

const MainSecction = () => {

    const [movements,setMovements] = useState(0);

    const addMovements = () => setMovements(movements+1);
    const restardMovements = () => setMovements(0);
    

    return (
        <div className="main-section">
            <div className="main-section__info-box">
                <InfoBox movements={movements}/>
            </div>
            <div className="main-section__game-container">
                <GameBoard addMovements={addMovements} restardMovements={restardMovements}/>
            </div>
        </div>
    );
}

export default MainSecction;