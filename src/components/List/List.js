import { useState, useEffect} from "react";

import "./List.css";
import Row from "./Row/Row";


const List = (props) => {

    const [wordListDisplay, setWordListDisplay] = useState([])


    useEffect(() => {
        setWordListDisplay(props.list);
    }, [props])

    return <div className={"listContainer"}>
        <div>{[1,2,3].map((row) => {
            return <Row word={"Hello"} result={3}/>
        })}</div>
    </div>
}

export default List;