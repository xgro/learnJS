// 수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.
// number 타입의 정수 (num >= 1)
// string 타입을 리턴해야 합니다.
// 반복문(for)문을 사용해야 합니다.
// 숫자(number string) 사이의 구분은 없습니다. ('1234567')
function makeDigits(num) {
    // TODO: 여기에 코드를 작성합니다.
    let res='';
    for ( let i=1 ; i<=num ; i++)
    {
        res += i;
    }
    return res;
}