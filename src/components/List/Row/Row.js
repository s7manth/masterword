import { useEffect, useState } from "react";

import "./Row.css";

const Row = (props) => {
    const [word, setWord] = useState("")
    const [result, setResult] = useState("");

    useEffect(() => {
        setWord(props.word);
        setResult(props.result);
    }, [props])


    return (
        <div className="rowContainer">
            <div>{word}</div>
            <div>{result}</div>
        </div>
    )
}

export default Row;