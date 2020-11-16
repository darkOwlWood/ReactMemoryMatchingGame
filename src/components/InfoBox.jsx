import React from 'react';
import '../assets/styles/components/InfoBox.scss';
import Movements from './Movement';
import Clock from './Clock';

const InfoBox = ({movements,clock}) => {
    return (
        <div className="info-box">
            <Movements movements={movements}/>
            <Clock clock={clock} />
        </div>
    );
}

export default InfoBox;