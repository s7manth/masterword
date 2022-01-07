import axios from "axios";

export default async function isValidWord(inputWord) {
    const uri = "https://api.dictionaryapi.dev/api/v2/entries/en/" + inputWord;

    axios.get(uri).then((response) => {
        console.log(response.data);
        return true;
    }).catch((error) => {
        console.error(error);
        return false;
    });
};