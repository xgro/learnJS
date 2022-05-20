module.exports = function computeAverageLengthOfWords(word1, word2) {
    // TODO: 여기에 코드를 작성합니다.
    word1 = word1 !== undefined ? word1.length : 0 
    word2 = word2 !== undefined ? word2.length : 0 
    
    return (word1+word2)/2;
}