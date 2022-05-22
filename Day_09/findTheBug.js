//주의 사항
//반복문(for)문을 사용해야 합니다.
//'#' 기호가 없는 경우 undefined를 리턴해야 합니다.
module.exports = function findTheBug(word) {
    // TODO: 여기에 코드를 작성합니다.
    for (let i = 0; i < word.length ; i++){
        if (word[i] == '#'){ 
            return i;
        }
    }
    return undefined;
}

