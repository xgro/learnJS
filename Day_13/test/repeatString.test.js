const result = require('../repeatString')

test('string 타입을 리턴해야 합니다', () => {
    expect(typeof result('what',3)).toBe('string');
})

test("'what', 3을(를) 입력받은 경우, 'whatwhatwhat'을(를) 리턴해야 합니다", () => {
    expect(result('what',3)).toBe('whatwhatwhat');
})

test("'what', 0을(를) 입력받은 경우, 빈문자열을(를) 리턴해야 합니다", () => {
    expect(result('what',0)).toBe('');
})


test("'', 10000을(를) 입력받은 경우, 빈문자열을(를) 리턴해야 합니다", () => {
    expect(result('',10000)).toBe('');
})
