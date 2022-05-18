const isOldEnoughToDrink = require('../isOldEnoughToDrink')

test("boolean 타입을 리턴해야 합니다.", () => {
    expect(typeof isOldEnoughToDrink(40)).toBe('boolean');
});

test("17을(를) 입력받은 경우, false를 리턴해야 합니다.", () => {
    expect(isOldEnoughToDrink(17)).toBe(false);
});

test("20을(를) 입력받은 경우, true를 리턴해야 합니다.", () => {
    expect(isOldEnoughToDrink(20)).toBe(true);
});

test("18을(를) 입력받은 경우, true를 리턴해야 합니다.", () => {
    expect(isOldEnoughToDrink(18)).toBe(true);
});