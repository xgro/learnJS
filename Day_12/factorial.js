module.exports = function factorial(num) {
    // TODO: 여기에 코드를 작성합니다.
    let res = 1;
    for(i=1;i<num+1;i++){
        res = res*i 
    }
    return res
}
