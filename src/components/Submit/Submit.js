import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import wordEvaluation from "../../functions/wordEvaluation";
import isValidWord from "../../functions/isValidWord";
import randomWordGenerator from "../../functions/randomWordGenerator";
import Button from "@mui/material/Button";

import "./Submit.css";

const Submit = ({ setGuessWordList, setGuessResultList, setSuccessWord }) => {
  const [length, setLength] = useState(5);
  const [actualWord, setActualWord] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);

  let hash = new Set();
  let actualAlphabetList;

  useEffect(() => {
    const randomWord = randomWordGenerator(length);
    setActualWord(randomWord[0]);
    setSuccessWord(randomWord[0]);
    console.log(randomWord);
  }, []);

  const [word, setWord] = useState("");
  const handleChange = (word) => {
    setWord(word);
    setIsCorrect(true);
  };

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
        setIsCorrect(false);
      } else if (!isValid) {
        console.log("enter a goddamn valid word");
        setIsCorrect(false);
      } else {
        setIsCorrect(true);
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
      <div className={`${!isCorrect ? "wrongInput" : ""}`}>
        <form onSubmit={handleSubmit}>
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
            inputStyle={{
              width: "3rem",
              height: "3rem",
              borderRadius: 5,
              fontSize: 20,
              textTransform: "capitalize",
              fontWeight: 800,
              fontFamily: "monospace",
            }}
            hasErrored={!isCorrect}
            errorStyle={{
              border: "2px red solid",
              color: "red",
            }}
          />
          <button type="submit" style={{ display: "none" }}></button>
        </form>
      </div>
      <div className="submitButton">
        <Button
          variant="contained"
          onClick={handleSubmit}
          color="secondary"
          style={{
            fontWeight: 800,
            boxShadow: "1px 1px 7px var(--color-purple)",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Submit;
