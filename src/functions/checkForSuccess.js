export default function checkForSuccess(resultScore, word, actualWord) {
    let length = actualWord.length;
    let score = "" + length + length;
    return resultScore === score && word === actualWord;
}
