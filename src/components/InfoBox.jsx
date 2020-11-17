import React from 'react';
import '../assets/styles/components/InfoBox.scss';
import GameStat from './GameStat';

const InfoBox = ({movements,clock}) => {
    return (
        <div className="info-box">
            <GameStat 
                gameData={movements}
                className={'movement'}
                statName={'moves'}
                startValue={0}
            />
            <GameStat
                gameData={clock}
                className={'clock'}
                statName={'time'}
                startValue={'00:00:00'}
            />
        </div>
    );
}

export default InfoBox;