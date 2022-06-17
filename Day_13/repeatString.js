
module.exports = function repeatString(str, num) {
    // TODO: 여기에 코드를 작성합니다.
    let res = ''
    for (let i=0 ; i<num ; i++){
        res += str;
    }
    return res;
}