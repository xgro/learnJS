//두 단어를 입력받아 두 단어의 평균 길이를 내림하여 리턴해야 합니다.
module.exports = function computeAverageLengthOfWords2(word1, word2) {
    // TODO: 여기에 코드를 작성합니다.
    word1 = word1 !== undefined ? word1.length : 0 
    word2 = word2 !== undefined ? word2.length : 0 
    
    return Math.floor((word1 + word2) / 2);
}
