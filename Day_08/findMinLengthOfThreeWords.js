module.exports = function findMinLengthOfThreeWords(word1, word2, word3) {
    // TODO: 여기에 코드를 작성합니다.
    word1 = word1 !== undefined ? word1.length : 0 
    word2 = word2 !== undefined ? word2.length : 0 
    word3 = word3 !== undefined ? word3.length : 0 

    return (word1 < word2) && (word1 < word3) ? word1 :
        word2 < word3 ? word2 :
        word3;
}
