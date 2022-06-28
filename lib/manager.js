
// export manager
// const Manager = require("./manager.js");
const Employee = require("./employee.js");
console.log(Employee)

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager'
    }
}
module.exports = Manager;
