import { useState } from 'react';

const dictionary = require("oxford-dictionary");
  
const config = {
    app_id : "YOUR_OXFORD_ACCOUNT_APP_ID",
    app_key : "YOUR_OXFORD_ACCOUNT_APP_KEY",
    source_lang : "en-us"
};

const dict = new dictionary(config);

const Submit = ({setGuessWordList, setGuessResultList}) => {
    const [word, setWord] = useState("");

    const handleChangeInput = (e) => {
        const inputWord = e.target;
        setWord(inputWord);
    };

    async function isValidWord(word) {
        const lookup = await dict.find(word);
        lookup.then(res => {
            console.log(res);
        })
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <button onSubmit={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default Submit;