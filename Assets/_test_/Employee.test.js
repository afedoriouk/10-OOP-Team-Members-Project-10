const Employee = require('../lib/employee');

test ("Create Employee",()=> {
const employee = new Employee('Bob Lorap', 987654,'boblorap@gmail.com');
expect(employee.name).toEqual(String);
expect(employee.id).toEqual(expect.any(Number));
expect (employee.email).toEqual(expect.any(String));
})

test("All methods for Employee class", () => {
    const employee = new Employee ("Bob Lorap", 987654,'boblorap@gmail.com');
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe(Employee);
})

// test("Using getID method.", () => {
//     const testID = 2;
//     const employeeInstance = new Employee("James", testID);
//     expect(employeeInstance.getId()).toBe(testID);
// })
// test("Using getEmail method.", () => {
//     const testEmail = "last.name@gmail.com";
//     const employeeInstance = new Employee("James", 2, testEmail);
//     expect(employeeInstance.getEmail()).toBe(testEmail);
// })

// test("Testing role.", () => {
//     const returnValue = "Employee";
//     const employeeInstance = new Employee("James", 2, "last.name@gmail.com");
//     expect(employeeInstance.getRole()).toBe(returnValue);
// })