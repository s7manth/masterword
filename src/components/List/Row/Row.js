import { useEffect, useState } from "react";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

import "./Row.css";

const characterBox = (character, entered) => {
  return (
    <div className={`character${entered ? "Entered" : ""}Container`}>
      {character}
    </div>
  );
};

const displayResult = (result, col) => {
  if (result) {
    const correctCharAndPos = parseInt(result[1]);
    const correctCharOnly = parseInt(result[0]) - parseInt(result[1]);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: `${col == 1 ? "flex-end" : "flex-start"}`,
        }}
      >
        {[...Array(correctCharAndPos)].map((i) => {
          return (
            <div className="checkBoth">
              <CheckBoxRoundedIcon
                style={{
                  color: "var(--color-success)",
                  margin: 2,
                  boxShadow: "1px 1px 7px var(--color-success) inset",
                }}
              />
            </div>
          );
        })}
        {[...Array(correctCharOnly)].map((i) => {
          return (
            <div className="checkChar">
              {" "}
              <CheckBoxRoundedIcon
                style={{
                  color: "var(--color-ok)",
                  margin: 2,
                  boxShadow: "1px 1px 7px var(--color-ok) inset",
                }}
              />{" "}
            </div>
          );
        })}
      </div>
    );
  }

  return <div></div>;
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
          {props.col == 1 && (
            <div className="result">{displayResult(result, 1)}</div>
          )}
          <div className="word" style={{ fontFamily: `monospace` }}>
            {word.split("").map((char) => characterBox(char, true))}
          </div>
          {props.col == 2 && (
            <div className="result">{displayResult(result, 2)}</div>
          )}
        </div>
      ) : (
        <div className="row">
          {props.col == 1 && (
            <div className="result">{displayResult(result, 1)}</div>
          )}

          <div
            className="word"
            style={{ fontFamily: `"simplifica", sans-serif` }}
          >
            {"     ".split("").map((char) => characterBox(char, false))}
          </div>
          {props.col == 2 && (
            <div className="result">{displayResult(result, 2)}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Row;
