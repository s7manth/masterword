import { useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";

const Submit = ({ setGuessWordList, setGuessResultList }) => {
  const [length, setLength] = useState(5);
  const [actualWord, setActualWord] = useState("pearl");

  const [word, setWord] = useState("");
  const handleChange = (word) => setWord(word);

  let hash = new Set();
  let actualAlphabetList = actualWord.split("");

  for (let i = 0; i < actualAlphabetList.length; ++i) {
    hash.add(actualAlphabetList[i]);
  }

  async function isValidWord(inputWord) {
    const uri = "https://api.dictionaryapi.dev/api/v2/entries/en/" + inputWord;

    axios
      .get(uri)
      .then((response) => {
        console.log(response.data);
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

  function evaluation(word) {
    let containedAlphabets = 0;
    let containedAndCorrectlyPlacedAlphabets = 0;
    let alphabetList = word.split("");

    for (let i = 0; i < alphabetList.length; ++i) {
      if (hash.has(alphabetList[i])) {
        containedAlphabets += 1;
      }

      if (alphabetList[i] === actualAlphabetList[i]) {
        containedAndCorrectlyPlacedAlphabets += 1;
      }
    }

    return "" + containedAlphabets + containedAndCorrectlyPlacedAlphabets;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      if (word.length !== length || !isValidWord(word)) {
        console.log("the word length is less than 5");
      } else {
        setGuessResultList((initial) => [...initial, evaluation(word)]);
        setGuessWordList((initial) => [...initial, word]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="submit">
      <OtpInput
        value={word}
        onChange={handleChange}
        numInputs={length}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={false}
        shouldAutoFocus={true}
        focusStyle={{
          border: "1px solid #CFD3DB",
          outline: "none",
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Submit;
