import React, { useState } from 'react';
import '../assets/styles/components/MainSecction.scss';
import InfoBox from './InfoBox';
import GameBoard from './GameBoard';
import Message from './Message';

const MainSecction = () => {

    const [gameStat, setGameStat] = useState({time:{}, movement:{}});
    const [triggerStart, setTriggerStart] = useState(false);

    return (
        <div className="main-section">
            <div className="main-section__info-box">
                <InfoBox setGameStat={setGameStat}/>
            </div>
            <div className="main-section__game-container">
                {
                    triggerStart?
                    <GameBoard
                        addMovement = {gameStat.movement.add()}
                        restartMovement = {gameStat.movement.restart}
                        setTriggerStart={setTriggerStart}
                    />
                    :<Message
                        addTime = {gameStat.time.add}
                        restartTime = {gameStat.time.restart}
                        setTriggerStart={setTriggerStart}
                    />
                }
            </div>
        </div>
    );
}

export default MainSecction;