const result = require('../compareNumbers')

test('string 타입을 리턴해야 합니다', () => {
    expect(typeof result()).toBe('string');
})

test("차례대로 1, 5을(를) 입력받은 경우, '1은(는) 5보다 작습니다'을(를) 리턴해야 합니다", () => {
    expect(result(1, 5)).toBe('1은(는) 5보다 작습니다');
})

test("차례대로 75, 52을(를) 입력받은 경우, '75은(는) 52보다 큽니다'을(를) 리턴해야 합니다", () => {
    expect(result(75, 52)).toBe('75은(는) 52보다 큽니다');
})

test("차례대로 5, 5을(를) 입력받은 경우, '두 수는 같습니다'을(를) 리턴해야 합니다", () => {
    expect(result(5, 5)).toBe('두 수는 같습니다');
})