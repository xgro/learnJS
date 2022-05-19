const result = require('../isEven')

test('boolean 타입을 리턴해야 합니다', () => {
    expect(typeof result()).toBe('boolean');
})

test('2을(를) 입력받은 경우, true를 리턴해야 합니다', () => {
    expect(result(2)).toBeTruthy();
})

test('44을(를) 입력받은 경우, true를 리턴해야 합니다', () => {
    expect(result(44)).toBeTruthy();
})

test('1을(를) 입력받은 경우, false를 리턴해야 합니다', () => {
    expect(result(1)).toBeFalsy();
})

test('55을(를) 입력받은 경우, false를 리턴해야 합니다', () => {
    expect(result(55)).toBeFalsy();
})

test('0을(를) 입력받은 경우, true를 리턴해야 합니다', () => {
    expect(result(0)).toBeTruthy();
})