const result = require('../findTheBug')

// test('string 타입을 리턴해야 합니다', () => {
//     expect(typeof result('')).toBe('string');
// })

// test('boolean 타입을 리턴해야 합니다', () => {
//     expect(typeof result()).toBe('boolean');
// })
test('number 타입을 리턴해야 합니다', () => {
    expect(typeof result('#')).toBe('number');
})

test("'cup#'을(를) 입력받은 경우, 3을(를) 리턴해야 합니다", () => {
    expect(result('cup#')).toBe(3);
})

test("'#lizard'을(를) 입력받은 경우, 0을(를) 리턴해야 합니다", () => {
    expect(result('#lizard')).toBe(0);
})