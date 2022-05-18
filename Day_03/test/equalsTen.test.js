const equalsTen = require('../equalsTen');

test('boolean 타입을 리턴해야 합니다.', () => {
    expect(typeof equalsTen(10)).toBe('boolean');
})

test('10을 입력받은경우, true를 리턴해야 합니다.', () => {
    expect(equalsTen(10)).toBe(true);
})
test('400을 입력받은경우, true를 리턴해야 합니다.', () => {
    expect(equalsTen(400)).toBe(false);
})

test('3을 입력받은경우, true를 리턴해야 합니다.', () => {
    expect(equalsTen(3)).toBe(false);
})

test('-1을 입력받은경우, true를 리턴해야 합니다.', () => {
    expect(equalsTen(-1)).toBe(false);
})
