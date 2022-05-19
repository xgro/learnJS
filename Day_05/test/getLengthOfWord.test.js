const result = require('../getLengthOfWord')

test('number 타입을 리턴해야 합니다', () => {
    expect(typeof result()).toBe('number');
})

test("'random'을(를) 입력받은 경우, 6을(를) 리턴해야 합니다", () => {
    expect(result('random')).toBe(6);
})

test("''을(를) 입력받은 경우, 0을(를) 리턴해야 합니다", () => {
    expect(result('')).toBe(0);
})

