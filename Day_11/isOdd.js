module.exports = function isOdd(num) {
    // TODO: 여기에 코드를 작성합니다.
    let i = 0
    let res = false;

    num = Math.abs(num);

    while(1){
        if ( num == i ){
        return res;
        }
        res = !res;
        i++;
    }
}