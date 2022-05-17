const course = require('../expression');


test('변수에 값을 할당하고 이를 이용해서 곱셈을 해본다.', () => {
    expect(course.num1).toBe(5);

    expect(course.num2).toBe(7);
    
    expect(course.result).toBe(35);
});