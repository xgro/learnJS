const result = require('../isOddLength')

// test('string 타입을 리턴해야 합니다', () => {
//     expect(typeof result('','','')).toBe('string');
// })

test('boolean 타입을 리턴해야 합니다', () => {
    expect(typeof result('')).toBe('boolean');
})

// test('number 타입을 리턴해야 합니다', () => {
//     expect(typeof result()).toBe('number');
// })

test("입력받은 단어가 'special'이면 true를 리턴해야 합니다", () => {
    expect(result('special')).toBe(true);
})
