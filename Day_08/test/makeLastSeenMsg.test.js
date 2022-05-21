const result = require('../makeLastSeenMsg')

test('string 타입을 리턴해야 합니다', () => {
    expect(typeof result()).toBe('string');
})

// test('boolean 타입을 리턴해야 합니다', () => {
//     expect(typeof result()).toBe('boolean');
// })

// test('number 타입을 리턴해야 합니다', () => {
//     expect(typeof result()).toBe('number');
// })

test("차례대로 'mike', 22을(를) 입력받은 경우, 'mike: 22분 전에 접속함'을(를) 리턴해야 합니다", () => {
    expect(result('mike', 22)).toBe('mike: 22분 전에 접속함');
})

test("차례대로 'mike', 59을(를) 입력받은 경우, 'mike: 59분 전에 접속함'을(를) 리턴해야 합니다", () => {
    expect(result('mike', 59)).toBe('mike: 59분 전에 접속함');
})

test("차례대로 'mike', 99을(를) 입력받은 경우, 'mike: 1시간 전에 접속함'을(를) 리턴해야 합니다", () => {
    expect(result('mike', 99)).toBe('mike: 1시간 전에 접속함');
})
