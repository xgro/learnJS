// 문자열과 문자를 입력받아 문자열에서 문자(letter)가 등장하는 횟수를 리턴해야 합니다.
/* 
인자 1 : str
    string 타입의 문자열
인자 2 : letter
    string 타입의 문자
    letter.length는 1
출력
    number 타입을 리턴해야 합니다.
주의 사항
    반복문(for)문을 사용해야 합니다.
    빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
*/

function countCharacter(str, letter) {
    // TODO: 여기에 코드를 작성합니다.
    let res=0;
    for ( i=0 ; i<str.length ; i++){
        if(str[i] === letter){
            res++;
        }
    }
    return res;
}