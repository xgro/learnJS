const result = require('../checkAge')

test('srting 타입을 리턴해야 합니다', () => {
    expect(typeof result()).toBe('string');
})

test("차례대로 'Tony', 21을(를) 입력받은 경우, 'Welcome, Tony!'을(를) 리턴해야 합니다", () => {
    expect(result('Tony', 21)).toBe('Welcome, Tony!');
})

test("차례대로 'Dan', 24을(를) 입력받은 경우, 'Welcome, Dan!'을(를) 리턴해야 합니다", () => {
    expect(result('Dan', 24)).toBe('Welcome, Dan!');
})

test("차례대로 'Rad', 4을(를) 입력받은 경우, 'Go home, Rad!'을(를) 리턴해야 합니다", () => {
    expect(result('Rad', 4)).toBe('Go home, Rad!');
})

