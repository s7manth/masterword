import { useState } from 'react';

import './App.css';
import List from './components/List/List';
import Submit from './components/Submit/Submit';

function App() {
  const [guessWordList, setGuessWordList] = useState([]);
  const [guessResultList, setGuessResultList] = useState([]);
  return (
    <div className="App">
      <List guessWordList={guessWordList} guessResultList={guessResultList}/>
      <Submit setGuessResultList={setGuessWordList} setGuessResultList={setGuessResultList}/>
    </div>
  );
}

export default App;
