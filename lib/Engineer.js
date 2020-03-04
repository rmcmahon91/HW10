// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee")

// github  // GitHub username


// getGithub()


// getRole() // Overridden to return 'Engineer'

class Engineer extends Employee {
    constructor (name , id , email, github) {
        super(name , id , email)
        this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer