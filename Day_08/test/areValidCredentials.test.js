const result = require('../areValidCredentials')

test('boolean 타입을 리턴해야 합니다', () => {
    expect(typeof result()).toBe('boolean');
})

test("차례대로 'me', 'mylongpassword'을(를) 입력받은 경우, false을(를) 리턴해야 합니다", () => {
    expect(result('me', 'mylongpassword')).toBe(false);
})

test("차례대로 'Someone', '1234567'을(를) 입력받은 경우, false을(를) 리턴해야 합니다", () => {
    expect(result('Someone', '1234567')).toBe(false);
})

test("차례대로 'Ritu', 'mylongpassword'을(를) 입력받은 경우, true을(를) 리턴해야 합니다", () => {
    expect(result('Ritu', 'mylongpassword')).toBe(true);
})