const Employee = require('../lib/Employee');

test('Checks set employee object', () => {
    const i = new Employee();
    expect(typeof(i)).toBe('object');
});

test('checks set name', () => {
    const name = 'America';
    const i = new Employee(name);
    expect(i.name).toBe(name);
});

test('checks set ID', () => {
    const testValue = 100;
    const i = new Employee('Iron', testValue);
    expect(i.id).toBe(testValue);
});

test('checks set email', () => {
    const testValue = 'email@email.com';
    const i = new Employee('Iron', 1, testValue);
    expect(i.email).toBe(testValue);
});

test('retrieve a set name', () => {
    const testValue = 'America';
    const i = new Employee(testValue);
    expect(i.getName()).toBe(testValue);
});

test('retrieve set ID', () => {
    const testValue = 100;
    const i = new Employee('Iron', testValue);
    expect(i.getId()).toBe(testValue);
});

test('retrieve set email', () => {
    const testValue = 'email@email.com';
    const i = new Employee('Iron', 1, testValue);
    expect(i.getEmail()).toBe(testValue);
});

test('retrieve set position', () => {
    const testValue = 'Employee';
    const i = new Employee('America', 1, 'email@email.com');
    expect(i.getPosition()).toBe(testValue);
});
