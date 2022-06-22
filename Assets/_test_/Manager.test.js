// manager constructor 
const Manager = require('../lib/manager');

// creating manager object  
test('Creates Manager object', () => {
    const manager = new Manager('John', 25364758, 'john.name@gmail', 3);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//getRole
test('gets role of employee', () => {
    const manager = new Manager('John', 25364758, 'john.name@gmail', );

    expect(manager.getRole()).toEqual("Manager");
});