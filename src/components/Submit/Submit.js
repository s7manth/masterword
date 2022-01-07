import { useState } from 'react';
import axios from 'axios';

const Submit = ({setGuessWordList, setGuessResultList}) => {
    const [word, setWord] = useState("");

    const handleChangeInput = (e) => {
        const inputWord = e.target.value;
        setWord(inputWord);
    };

    async function isValidWord(inputWord) {
        const uri = "https://wordsapiv1.p.mashape.com/words/" + inputWord;
        await axios.get(uri)
        .then(res => {
            console.log("response");
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            console.log("word doesnt exist")
        });
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        try {
            if (word.length !== 5 || !isValidWord(word)) {
                console.log("the word length is less than 5");
            } else {
                setGuessResultList(initial => [...initial, word]);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="submit">
            <input name="word" type="text" value={word} onChange={handleChangeInput} required />
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default Submit;