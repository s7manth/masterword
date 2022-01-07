export default function wordEvaluation(word, hash, actualAlphabetList) {
    let containedAlphabets = 0;
    let containedAndCorrectlyPlacedAlphabets = 0;
    let alphabetList = word.split("");

    for (let i = 0; i < alphabetList.length; ++i) {
        if (hash.has(alphabetList[i])) {
            containedAlphabets += 1;
        }

        if (alphabetList[i] === actualAlphabetList[i]) {
            containedAndCorrectlyPlacedAlphabets += 1;
        }
    }

    return "" + containedAlphabets + containedAndCorrectlyPlacedAlphabets;
};