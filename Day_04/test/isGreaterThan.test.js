const isGreaterThan = require('../isGreaterThan')

test('boolean 타입을 리턴해야 합니다', () => {
    expect(typeof isGreaterThan()).toBe('boolean');
})

test('차례대로 20, 20을(를) 입력받은 경우, false를 리턴해야 합니다', () => {
    expect(isGreaterThan(20,20)).toBe(false);
})

test('차례대로 1, 2을(를) 입력받은 경우, true를 리턴해야 합니다', () => {
    expect(isGreaterThan(1,2)).toBe(true);
})

test('차례대로 11, 10을(를) 입력받은 경우, false를 리턴해야 합니다', () => {
    expect(isGreaterThan(11,10)).toBe(false);
})
