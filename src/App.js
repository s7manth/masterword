import { useEffect, useState } from 'react';

import './App.css';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import Submit from './components/Submit/Submit';

import SuccessModal from './components/Modal/SuccessModal';
import checkForSuccess from './functions/checkForSuccess';
import FailureModal from './components/Modal/FailureModal';
import checkForFailure from './functions/checkForFailure';
import randomWordGenerator from './functions/randomWordGenerator';

function App() {
  const [guessWordList, setGuessWordList] = useState([]);
  const [guessResultList, setGuessResultList] = useState([]);

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);

  const [actualWord, setActualWord] = useState("");

  const handleOpenSuccess = () => setOpenSuccess(true);
  const handleOpenFailure = () => setOpenFailure(true);

  const [length, setLength] = useState(5);

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
    window.location.reload();
  }
  const handleCloseFailure = () => {
    setOpenFailure(false);
    window.location.reload();
  }

  useEffect(() => {
    const randomWord = randomWordGenerator(length);
    setActualWord(randomWord[0]);
    setSuccessWord(randomWord[0]);
    console.log(randomWord);
  }, [ length ]);

  const [successWord, setSuccessWord] = useState("");

  const NUMBER_OF_ATTEMPTS = 10;

  useEffect(() => {
    let successIndication = checkForSuccess(guessResultList[guessResultList.length - 1], guessWordList[guessWordList.length - 1], successWord);
    let failureIndication = checkForFailure(successWord, NUMBER_OF_ATTEMPTS, guessWordList);
    if (guessResultList)
    if (successIndication && !failureIndication) {
      handleOpenSuccess();
    } else if (failureIndication && !successIndication) {
      handleOpenFailure();
    }
  }, [guessResultList, guessWordList]);

  return (
    <div className="App">
      <SuccessModal word={successWord} open={openSuccess} handleClose={handleCloseSuccess} />
      <FailureModal word={successWord} open={openFailure} handleClose={handleCloseFailure} />
      <NavBar length={length} setLength={setLength} />
      <List guessWordList={guessWordList} guessResultList={guessResultList} length={length} />
      <Submit setGuessWordList={setGuessWordList} setGuessResultList={setGuessResultList} setSuccessWord={setSuccessWord} wordLength={length} actual={actualWord} />
    </div>
  );
}

export default App;