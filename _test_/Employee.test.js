const Employee = require('../lib/employee');

test ("Create Employee",()=> {
const employee = new Employee('Bob Lorap', 987654,'boblorap@gmail.com');
expect(employee.name).toEqual('Bob Lorap');
expect(employee.id).toEqual(987654);
expect (employee.email).toEqual('boblorap@gmail.com');
})

test("All methods for Employee class", () => {
    const employee = new Employee ("Bob Lorap", 987654,'boblorap@gmail.com');
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
});
