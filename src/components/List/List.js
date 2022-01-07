import { useState, useEffect } from "react";

import "./List.css";
import Row from "./Row/Row";

const List = ({ guessWordList, guessResultList }) => {
  const [wordListColumn1, setWordListColumn1] = useState([]);
  const [wordListColumn2, setWordListColumn2] = useState([]);

  const [resultListColumn1, setResultListColumn1] = useState([]);
  const [resultListColumn2, setResultListColumn2] = useState([]);

  const initializeColumns = () => {
    const listLength = guessWordList.length;
    if (listLength <= 5) {
      setWordListColumn1(guessWordList);
      setResultListColumn1(guessResultList);
    } else {
      setWordListColumn1(guessWordList.slice(0, 5));
      setResultListColumn1(guessResultList.slice(0, 5));
      setWordListColumn2(guessWordList.slice(5, listLength));
      setResultListColumn2(guessResultList.slice(5, listLength));
    }
  };

  useEffect(() => {
    initializeColumns();
  }, [guessWordList, guessResultList]);

  return (
    <div className={"listContainer"}>
      <div className={"listColumn"}>
        {[0, 1, 2, 3, 4].map((index) => {
          return (
            <Row
              word={wordListColumn1[index]}
              result={resultListColumn1[index]}
              col={1}
            />
          );
        })}
      </div>
      <div className={"listColumn"}>
        {[0, 1, 2, 3, 4].map((index) => {
          return (
            <Row
              word={wordListColumn2[index]}
              result={resultListColumn2[index]}
              col={2}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
