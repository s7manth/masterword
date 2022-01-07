import { useState } from 'react';

import './App.css';
import List from './components/List/List';
import BasicModal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import Submit from './components/Submit/Submit';

function App() {
  const [guessWordList, setGuessWordList] = useState([]);
  const [guessResultList, setGuessResultList] = useState([]);

  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const handleOpen = () => setInstructionsOpen(true);
  const handleClose = () => setInstructionsOpen(false);

  return (
    <div className="App">
      <NavBar/>
      <BasicModal />
      <List guessWordList={guessWordList} guessResultList={guessResultList}/>
      <Submit setGuessResultList={setGuessWordList} setGuessResultList={setGuessResultList}/>
    </div>
  );
}

export default App;