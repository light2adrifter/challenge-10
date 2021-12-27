const Engineer = require('../lib/Engineer');

test('Set github', () => {
    const testValue = 'GitHubUser';
    const i = new Engineer('Iron', 1, 'email@email.com', testValue);
    expect(i.github).toBe(testValue);
});

test('gets position', () => {
    const testValue = 'Engineer';
    const i = new Engineer('Iron', 1, 'email@email.com', 'gitHub');
    expect(i.getPosition()).toBe(testValue);
});

test('Gets github username', () => {
    const testValue = 'gitHub';
    const i = new Engineer('Iron', 1, 'email@email.com', testValue);
    expect(i.getGitHub()).toBe(testValue);
});