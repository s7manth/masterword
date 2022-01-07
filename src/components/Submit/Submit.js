import { useState } from 'react';
import OtpInput from "react-otp-input";
import axios from "axios";

const Submit = ({ setGuessWordList, setGuessResultList }) => {
    const [length, setLength] = useState(5);

    const [word, setWord] = useState("");
    const handleChange = (word) => setWord(word);

    async function isValidWord(inputWord) {
        const uri = "https://api.dictionaryapi.dev/api/v2/entries/en/" + inputWord;

        axios.get(uri).then((response) => {
            console.log(response.data);
            return true;
        }).catch((error) => {
            console.error(error);
            return false;
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        try {
            if (word.length !== length || !isValidWord(word)) {
                console.log("the word length is less than 5");
            } else {
                setGuessWordList(initial => [...initial, word]);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="submit">
            <OtpInput
                value={word}
                onChange={handleChange}
                numInputs={length}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={false}
                shouldAutoFocus={true}
                focusStyle={{
                    border: "1px solid #CFD3DB",
                    outline: "none"
                }}
            />
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default Submit;