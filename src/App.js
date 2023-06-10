
import './App.css';
import Playerlist from './Components/Playerlist';
import {playertab  } from "./players"


function App() {
  return (
    <div>
      <Playerlist playertab={playertab } />
    </div>
  );
}

export default App;
