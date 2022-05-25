const result = require('../factorial')

// test('number 타입을 리턴해야 합니다', () => {
//     expect(typeof result(0)).toBe('number');
// })

// test("4을(를) 입력받은 경우, 10을(를) 리턴해야 합니다", () => {
//     expect(result(4)).toBe(10);
// })

test('number 타입을 리턴해야 합니다', () => {
    expect(typeof result(2)).toBe('number');
})

test("0(를) 입력받은 경우, 1을(를) 리턴해야 합니다", () => {
    expect(result(0)).toBe(1);
})

test("4을(를) 입력받은 경우, 24를 리턴해야 합니다", () => {
    expect(result(4)).toBe(24);
})
