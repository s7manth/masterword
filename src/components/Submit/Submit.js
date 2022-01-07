import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import wordEvaluation from "../../functions/wordEvaluation";
import isValidWord from "../../functions/isValidWord";
import randomWordGenerator from "../../functions/randomWordGenerator";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    try {
      if (word.length !== length) {
        toast.error(`The word should have ${length} characters`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setIsCorrect(false);
      } else if (!isValid) {
        toast.error("Please enter a valid english word", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
              color: "transparent",
              textShadow: "0 0 0 black",
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Submit;
