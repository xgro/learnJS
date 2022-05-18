const divideBy2 = require('../declarefunction');

test("첫 번째 인자를 2로 나누는 함수 divideBy2를 선언하세요.", () => {

    expect(divideBy2(10)).toBe(5);
    expect(divideBy2(20)).toBe(10);
});
