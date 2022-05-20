const result = require('../computeAverageLengthOfWords')

test('number 타입을 리턴해야 합니다', () => {
    expect(typeof result()).toBe('number');
})

test("차례대로 'is', 'this'을(를) 입력받은 경우, 3을(를) 리턴해야 합니다", () => {
    expect(result('is', 'this')).toBe(3);
})


