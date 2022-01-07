const randomWords = require("@genzou/random-words");

export default function randomWordGenerator(length) {
    let config = {
        exactly: 1, 
        maxLength: length,
        minLength : length,
    };

    return randomWords(config);
};
