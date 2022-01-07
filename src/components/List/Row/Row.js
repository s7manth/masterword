import { useEffect, useState } from "react";

import "./Row.css";

const characterBox = (character) => {
  return <div className="characterContainer">{character}</div>;
};

const Row = (props) => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setWord(props.word);
    setResult(props.result);
    console.log(props.result);
  }, [props]);

  return (
    <div className="rowContainer">
      {word ? (
        <div className="row">
          <div className="word">
            {word.split("").map((char) => characterBox(char))}
          </div>
          <div className="result">{result}</div>
        </div>
      ) : (
        <div className="row">
          <div className="word">
            {"_____".split("").map((char) => characterBox(char))}
          </div>
          <div className="result">{result}</div>
        </div>
      )}
    </div>
  );
};

export default Row;
