import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Game from './components/Game';
import StartGame from './components/StartGame';
import EndGame from './components/EndGame';

function App() {

    const [gamePhase, setGamePhase] = useState('end-game'),
          [hasLost, setHasLost] = useState(false),
          [gameMode, setGameMode] = useState('normal'),
          [timer, setTimer] = useState((gameMode !== 'normal' ? 30 : 60));

    return (
      <div className="App">
        { gamePhase === "menu" && <Menu gamePhase={setGamePhase} gameMode={setGameMode} />}
        { gamePhase === "start-game" && <StartGame gamePhase={setGamePhase} gameMode={gameMode} /> }
        { gamePhase === "game" && <Game gamePhase={setGamePhase} hasLost={setHasLost} gameMode={gameMode} timer={timer} setTimer={setTimer}/> }
        { gamePhase === "end-game" && <EndGame gamePhase={setGamePhase} hasLost={hasLost} setHasLost={setHasLost}  timer={timer}/> }
      </div>
    );
}

export default App;
