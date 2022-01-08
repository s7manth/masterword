import axios from "axios";

export default async function isValidWord(inputWord) {
  const uri = "https://api.dictionaryapi.dev/api/v2/entries/en/" + inputWord;
  let isValid;
  await axios
    .get(uri)
    .then((response) => {
      // console.log(response.data);
      isValid = true;
      return true;
    })
    .catch((error) => {
      console.error(error);
      isValid = false;
    });
  return isValid;
}
