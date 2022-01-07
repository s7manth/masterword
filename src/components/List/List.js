import { useState, useEffect} from "react";

import "./List.css";
import Row from "./Row/Row";


const List = (props) => {

    const [wordListColumn1, setWordListColumn1] = useState([])
    const [wordListColumn2, setWordListColumn2] = useState([])


    useEffect(() => {
        setWordListColumn1(props.list1);
        setWordListColumn2(props.list2);
    }, [props])

    return <div className={"listContainer"}>
        <div className={"listColumn"}>{[1,2,3,4,5,6,7,8,9,10].map((row) => {
            return <Row word={""} result={3}/>
        })}</div>
         <div className={"listColumn"}>{[1,2,3,4,5,6,7,8,9,10].map((row) => {
            return <Row word={""} result={3}/>
        })}</div>
    </div>
}

export default List;