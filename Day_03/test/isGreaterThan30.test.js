const isGreaterThan30 = require('../isGreaterThan30')

test("string 타입을 리턴해야 합니다.", () => {
    expect(typeof isGreaterThan30(40)).toBe('string');
});

test("30을(를) 입력받은 경우, '에어컨을 켜야겠다!'을(를) 리턴해야 합니다.", () => {
    expect(isGreaterThan30(30)).toBe('에어컨을 켜야겠다!');
});

test("5000을(를) 입력받은 경우, '에어컨을 켜야겠다!'을(를) 리턴해야 합니다.", () => {
    expect(isGreaterThan30(5000)).toBe('에어컨을 켜야겠다!');
});

test("-30을(를) 입력받은 경우, '여름이 매우 덥네요'을(를) 리턴해야 합니다.", () => {
    expect(isGreaterThan30(-30)).toBe('여름이 매우 덥네요');
});

test("29.99999을(를) 입력받은 경우, '여름이 매우 덥네요'을(를) 리턴해야 합니다.", () => {
    expect(isGreaterThan30(29.99999)).toBe('여름이 매우 덥네요');
});

test("0을(를) 입력받은 경우, '여름이 매우 덥네요'을(를) 리턴해야 합니다.", () => {
    expect(isGreaterThan30(0)).toBe('여름이 매우 덥네요');
});





