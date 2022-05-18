const getRunCatDistance = require('../function');

test("속력(speed), 시간(time)이 숫자로 주어졌을 때, 이동한 거리를 변수 distance에 할당하여 리턴한다.", () => {

    expect(getRunCatDistance(2,20)).toBe(40);
    expect(getRunCatDistance(3, 9)).toBe(27);
});