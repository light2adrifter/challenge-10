const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

test('Sets office #', () =>{
    const testValue = 1941;
    const i = new Manager('Captain', 1, 'email@email', testValue);
    expect(i.officeNumber).toBe(testValue);
});

test('gets position', () =>{
    const testValue = 'Manager';
    const i = new Manager('Captain', 1, 'email@email', 1941);
    expect(i.getPosition()).toBe(testValue);
});

test('gets office #', () =>{
    const testValue = 1941;
    const i = new Manager('Captain', 1, 'email@email', testValue);
    expect(i.getOfficeNumber()).toBe(testValue);
});