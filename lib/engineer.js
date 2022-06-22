// require Employee class
const Employee = require("./employee.js");

// class for Engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getGithub() {
        return this.github;
    }

}
// export Engineer

module.exports = Engineer;