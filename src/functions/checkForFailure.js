export default function checkForFailure(actualWord, numberOfAttempts, guessList) {
    return numberOfAttempts <= guessList.length && actualWord !== guessList[guessList.length - 1];
}
