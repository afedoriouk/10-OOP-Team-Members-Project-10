
// export manager

const Employee = require("./employee.js");
console.log(Employee)

class Manager extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    
    }
    getName() {
        return this.name;
    }
    getRole() {
        return 'Manager'
    }
}
module.exports = Manager;
