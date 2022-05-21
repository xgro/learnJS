const result = require('../findShortestOfThreeWords')

test('string 타입을 리턴해야 합니다', () => {
    expect(typeof result('','','')).toBe('string');
})

// test('boolean 타입을 리턴해야 합니다', () => {
//     expect(typeof result()).toBe('boolean');
// })

// test('number 타입을 리턴해야 합니다', () => {
//     expect(typeof result()).toBe('number');
// })

test("차례대로 'a', 'be', 'see'을(를) 입력받은 경우, 'a'을(를) 리턴해야 합니다", () => {
    expect(result('a', 'be', 'see')).toBe('a');
})

test("차례대로 'i', 'can', 'do'을(를) 입력받은 경우, 'i'을(를) 리턴해야 합니다", () => {
    expect(result('i', 'can', 'do')).toBe('i');
})
