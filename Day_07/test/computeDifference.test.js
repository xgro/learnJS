const result = require('../computeDifference')

test('문자열 간 덧셈 연산은 금지됩니다', () => {
    expect(/\+/g.test(result)).toBe(false);
})

test('string 타입을 리턴해야 합니다', () => {
    expect(typeof result(0,0)).toBe('string');
})

test("차례대로 10, 2을(를) 입력받은 경우, '10, 2의 차이는 8입니다.'을(를) 리턴해야 합니다", () => {
    expect(result(10, 2)).toBe('10, 2의 차이는 8입니다.');
})


