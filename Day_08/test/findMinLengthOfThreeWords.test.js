const result = require('../findMinLengthOfThreeWords')

test('number 타입을 리턴해야 합니다', () => {
    expect(typeof result()).toBe('number');
})

test("차례대로 'a', 'be', 'see'을(를) 입력받은 경우, 1을(를) 리턴해야 합니다", () => {
    expect(result('a', 'be', 'see')).toBe(1);
})

test("차례대로 'i', 'can', 'do'을(를) 입력받은 경우, 1을(를) 리턴해야 합니다", () => {
    expect(result('i', 'can', 'do')).toBe(1);
})

