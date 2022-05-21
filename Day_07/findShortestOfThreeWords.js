module.exports = function findShortestOfThreeWords(word1, word2, word3) {
    // TODO: 여기에 코드를 작성합니다.

    let length1 = word1 !== undefined ? word1.length : '' 
    let length2 = word2 !== undefined ? word2.length : '' 
    let length3 = word3 !== undefined ? word3.length : '' 

    return length1 <= length2 && length1 <= length3 ? word1 : 
        length2 <= length3 ? word2 : 
        word3;
}
