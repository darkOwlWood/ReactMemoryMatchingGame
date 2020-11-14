import React from 'react';
import '../assets/styles/components/MainSecction.scss';
import GameBoard from './GameBoard';

const MainSecction = () => {
    return (
        <div className="main-section">
            <div className="main-section__game-container">
                <GameBoard />
            </div>
        </div>
    );
}

export default MainSecction;