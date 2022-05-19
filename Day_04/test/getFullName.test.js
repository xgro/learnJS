const result = require('../getFullName')

test('srting 타입을 리턴해야 합니다', () => {
    expect(typeof result()).toBe('string');
})

test('차례대로 Rebecca, Solnit을(를) 입력받은 경우, "Rebecca Solnit"을(를) 리턴해야 합니다', () => {
    expect(result('Rebecca', 'Solnit')).toBe('Rebecca Solnit');
})
