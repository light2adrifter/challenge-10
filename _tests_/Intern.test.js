const Intern=require('../lib/Intern.js');

test('sets school', () => {
    const testValue = 'UCF';
    const i = new Intern('Spider', 1, 'email@email,com', testValue);
    expect(i.school).toBe(testValue);
});

test('gets position', () => {
    const testValue = 'Intern';
    const i = new Intern('Spider', 1, 'email@email,com', 'UCF');
    expect(i.getPosition()).toBe(testValue);
});

test('gets school value', () => {
    const testValue = 'UCF';
    const i = new Intern('Spider', 1, 'email@email,com', testValue);
    expect(i.getSchool()).toBe(testValue);
});