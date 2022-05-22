const result = require('../sum')

test('number 타입을 리턴해야 합니다', () => {
    expect(typeof result(0)).toBe('number');
})

test("4을(를) 입력받은 경우, 10을(를) 리턴해야 합니다", () => {
    expect(result(4)).toBe(10);
})

test("77을(를) 입력받은 경우, 3003을(를) 리턴해야 합니다", () => {
    expect(result(77)).toBe(3003);
})