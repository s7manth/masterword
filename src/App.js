import { useEffect, useState } from 'react';

import './App.css';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import Submit from './components/Submit/Submit';

import SuccessModal from './components/Modal/SuccessModal';
import checkForSuccess from './functions/checkForSuccess';

function App() {
  const [guessWordList, setGuessWordList] = useState([]);
  const [guessResultList, setGuessResultList] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [successWord, setSuccessWord] = useState("");

  useEffect(() => {
    let successIndication = checkForSuccess(guessResultList[guessResultList.length - 1], guessWordList[guessWordList.length - 1], successWord);
    if (successIndication) {
      handleOpen();
    }
  }, [guessResultList, guessWordList]);

  return (
    <div className="App">
      <SuccessModal open={open} handleClose={handleClose}/>
      <NavBar/>
      <List guessWordList={guessWordList} guessResultList={guessResultList}/>
      <Submit setGuessWordList={setGuessWordList} setGuessResultList={setGuessResultList} setSuccessWord={setSuccessWord} />
    </div>
  );
}

export default App;