const result = require('../sum')

test('나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다', () => {
    expect(/\/|%/g.test(result)).toBe(false);
})

// test('number 타입을 리턴해야 합니다', () => {
//     expect(typeof result(0)).toBe('number');
// })

// test("4을(를) 입력받은 경우, 10을(를) 리턴해야 합니다", () => {
//     expect(result(4)).toBe(10);
// })

test('boolean 타입을 리턴해야 합니다', () => {
    expect(typeof result(40)).toBe('boolean');
})

test("77을(를) 입력받은 경우, true를 리턴해야 합니다", () => {
    expect(result(77)).toBe(true);
})

test("100을(를) 입력받은 경우, false를 리턴해야 합니다", () => {
    expect(result(100)).toBe(false);
})

test("0을(를) 입력받은 경우, false를 리턴해야 합니다", () => {
    expect(result(0)).toBe(false);
})
