import React from 'react';
import '../assets/styles/components/MainSecction.scss';
import GameBoard from '../components/GameBoard';

const MainSecction = () => {
    return (
        <div className="main-section">
            <GameBoard />
        </div>
    );
}

export default MainSecction;