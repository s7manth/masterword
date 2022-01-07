import { useEffect, useState } from "react";

import "./Row.css";

const characterBox = (character, entered) => {
  return (
    <div className={`character${entered ? "Entered" : ""}Container`}>
      {character}
    </div>
  );
};

const Row = (props) => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setWord(props.word);
    setResult(props.result);
  }, [props]);

  return (
    <div className="rowContainer">
      {word ? (
        <div className="row">
          <div
            className="word"
            style={{ fontFamily: `monospace` }}
          >
            {word.split("").map((char) => characterBox(char, true))}
          </div>
          <div>{result}</div>
        </div>
      ) : (
        <div className="row">
          <div
            className="word"
            style={{ fontFamily: `"simplifica", sans-serif` }}
          >
            {"     ".split("").map((char) => characterBox(char, false))}
          </div>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
};

export default Row;
