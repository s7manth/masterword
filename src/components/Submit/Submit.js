import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import wordEvaluation from "../../functions/wordEvaluation";
import isValidWord from "../../functions/isValidWord";
import randomWordGenerator from "../../functions/randomWordGenerator";

const Submit = ({ setGuessWordList, setGuessResultList }) => {
  const [length, setLength] = useState(5);
  const [actualWord, setActualWord] = useState("");

  let hash = new Set();
  let actualAlphabetList;

  useEffect(() => {
    const randomWord = randomWordGenerator(length);
    setActualWord(randomWord[0]);
    console.log(randomWord);
  }, []);

  const [word, setWord] = useState("");
  const handleChange = (word) => setWord(word);

  actualAlphabetList = actualWord.split("");
  for (let i = 0; i < actualAlphabetList.length; ++i) {
    hash.add(actualAlphabetList[i]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = await isValidWord(word);
    console.log(isValid);
    try {
      if (word.length !== length) {
        console.log("the word length is less than 5");
      } else if (!isValid) {
        console.log("enter a goddamn valid word");
      } else {
        setGuessResultList((initial) => [
          ...initial,
          wordEvaluation(word.toLowerCase(), hash, actualAlphabetList),
        ]);
        setGuessWordList((initial) => [...initial, word.toLowerCase()]);
        setWord("");
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
