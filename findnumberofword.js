function countRepeatedWords(inputString) {
    // Convert the string to lowercase and split it into words
    const words = inputString.toLowerCase().split(/\W+/);
    const wordCount = {};

    // Count occurrences of each word
    words.forEach(word => {
        if (word) { // Check if the word is not an empty string
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });

    return wordCount;
}

// Example usage
const inputString = "This is a test. This test is only a test.";
const result = countRepeatedWords(inputString);

console.log("Word counts:", result);
