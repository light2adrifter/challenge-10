const Engineer = require('../lib/Engineer');

test('Set github', () => {
    const testValue = 'GithubUser';
    const i = new Engineer('Iron', 1, 'email@email.com', testValue);
    expect(i.github).toBe(testValue);
});

test('gets position', () => {
    const testValue = 'Engineer';
    const i = new Engineer('Iron', 1, 'email@email.com', 'github');
    expect(i.getPosition()).toBe(testValue);
});

test('Gets github username', () => {
    const testValue = 'github';
    const i = new Engineer('Iron', 1, 'email@email.com', testValue);
    expect(i.getGithub()).toBe(testValue);
});