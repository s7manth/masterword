import { useState, useEffect } from "react";

import "./List.css";
import Row from "./Row/Row";

const List = ({ guessWordList, guessResultList, length }) => {
  const [wordListColumn1, setWordListColumn1] = useState([]);
  const [wordListColumn2, setWordListColumn2] = useState([]);

  const [resultListColumn1, setResultListColumn1] = useState([]);
  const [resultListColumn2, setResultListColumn2] = useState([]);

  const initializeColumns = () => {
    const listLength = guessWordList.length;
    if (listLength <= length) {
      setWordListColumn1(guessWordList);
      setResultListColumn1(guessResultList);
      setWordListColumn2([]);
      setResultListColumn2([]);
    } else {
      setWordListColumn1(guessWordList.slice(0, length));
      setResultListColumn1(guessResultList.slice(0, length));
      setWordListColumn2(guessWordList.slice(length, listLength));
      setResultListColumn2(guessResultList.slice(length, listLength));
    }
  };

  useEffect(() => {
    initializeColumns();
    console.log(guessWordList);
    console.log(guessResultList);
  }, [guessWordList, guessResultList, length]);

  return (
    <div className={"listContainer"}>
      <div className={"listColumn"}>
        {[...Array(Math.min(length, 5)).keys()].map((index) => {
          console.log(index);
          return (
            <Row
              word={wordListColumn1[index]}
              result={resultListColumn1[index]}
              col={1}
              length={length}
            />
          );
        })}
      </div>
      <div className={"listColumn"}>
        {[...Array(Math.min(length, 5)).keys()].map((index) => {
          return (
            <Row
              word={wordListColumn2[index]}
              result={resultListColumn2[index]}
              col={2}
              length={length}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
