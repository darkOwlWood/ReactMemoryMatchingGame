import React from 'react';
import '../assets/styles/containers/App.scss';
import GameBoard from '../components/GameBoard';

const App = () => {
    return (
        <div className="app">
            <GameBoard />
        </div>
    );
}

export default App;