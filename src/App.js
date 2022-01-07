import { useEffect, useState } from 'react';

import './App.css';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import Submit from './components/Submit/Submit';

import SuccessModal from './components/Modal/SuccessModal';
import checkForSuccess from './functions/checkForSuccess';
import FailureModal from './components/Modal/FailureModal';
import checkForFailure from './functions/checkForFailure';

function App() {
  const [guessWordList, setGuessWordList] = useState([]);
  const [guessResultList, setGuessResultList] = useState([]);

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);

  const handleOpenSuccess = () => setOpenSuccess(true);
  const handleOpenFailure = () => setOpenFailure(true);

  const handleCloseSuccess = () => setOpenSuccess(false);
  const handleCloseFailure = () => setOpenFailure(false);
  const [successWord, setSuccessWord] = useState("");

  const NUMBER_OF_ATTEMPTS = 10;

  useEffect(() => {
    let successIndication = checkForSuccess(guessResultList[guessResultList.length - 1], guessWordList[guessWordList.length - 1], successWord);
    if (successIndication) {
      handleOpenSuccess();
    }
    let failureIndication = checkForFailure(NUMBER_OF_ATTEMPTS, guessResultList);
    if (failureIndication) {
      handleOpenFailure();
    }
  }, [guessResultList, guessWordList]);

  return (
    <div className="App">
      <SuccessModal word={successWord} open={openSuccess} handleClose={handleCloseSuccess} />
      <FailureModal word={successWord} open={openFailure} handleClose={handleCloseFailure} />
      <NavBar/>
      <List guessWordList={guessWordList} guessResultList={guessResultList} />
      <Submit setGuessWordList={setGuessWordList} setGuessResultList={setGuessResultList} setSuccessWord={setSuccessWord} />
    </div>
  );
}

export default App;