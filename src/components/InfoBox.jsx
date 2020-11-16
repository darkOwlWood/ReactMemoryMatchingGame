import React from 'react';
import '../assets/styles/components/InfoBox.scss';
import Movements from './Movement';

const InfoBox = ({movements}) => {
    return (
        <div className="info-box">
            <Movements movements={movements}/>
        </div>
    );
}

export default InfoBox;