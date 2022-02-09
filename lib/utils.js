export const howManyJsonElements = (json) => {
    return json.length !== 0 ? json.length : 0;
}

/**
 * Just a method to add pipes between environment words
 */
export const displayWordsWithPipes = (words) => {
    return words.map(word => {
        if (words.indexOf(word) != words.length - 1) {
            return (word + " | ")
        } else {
            return word
        }
    })
}