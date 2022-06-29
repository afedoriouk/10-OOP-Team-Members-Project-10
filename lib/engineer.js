// require Employee class
const Employee = require("./employee.js");

// class for Engineer inherit from Employee
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
// export Engineer

module.exports = Engineer;
