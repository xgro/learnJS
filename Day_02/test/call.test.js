const course = require('../call');

test("첫 번째 인자로 문자열을 넣어야 합니다.", () => {
    let notAString = null;
    expect(course.returnWordWithJoy()).toBe('wrong type');
    expect(course.returnWordWithJoy(notAString)).toBe('wrong type');
    expect(course.returnWordWithJoy(1234)).toBe('wrong type');
});

test("문자열 'I love DevOps'을 첫 번째 인자로 넣어 'I love DevOps!'을 리턴해야 합니다.", () => {
    expect(course.word).toBe('I love DevOps!');
});
