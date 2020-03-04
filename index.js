var id =1;
 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
let path = require("path");
let fs = require("fs");
let render = require("./lib/htmlRenderer");
let allEmployees = []
function askQuestions () {
    inquirer.prompt([{
        type: "list",
        message: "What do you want to do?",
        choices: ["add Manager" , "add Engineer" , "add Intern"],
        name: "addEmployee"
    }]).then(function(input){
        
        switch(input.addEmployee){
            case "add Manager":
                addManager()
                break 
                case "add Engineer":
                    addEngineer()
                    break
               case "add Intern":
                        addIntern()
                        break 
              case "quit":
                  createHTML()
                  return
                 
        }
          
    })
}


function createHTML (){
   // render(allEmployees)
}

function addManager(){
    inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "employeeName"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "employeeEmail"

    },
    {
        type: "input",
        message: "What is your office number",
        name: "employeeOfficeNumber"
    
    }
]).then(function(input){
    var manager = new Manager (input.employeeName , id++ , input.employeeEmail , input.employeeOfficeNumber)
     
    allEmployees.push(manager)
     var output =  render(allEmployees)

    console.log(output)
    fs.writeFile("./team.html",output,function(err,results){
        if (err){
            console.log(err)
        }
    })
   askQuestions()
})
};

function addEngineer(){
    inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "employeeName"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "employeeEmail"

    },
    {
        type: "input",
        message: "What is your office number",
        name: "employeeOfficeNumber"
    
    }
]).then(function(input){
    var engineer = new Engineer (input.employeeName , id++ , input.employeeEmail , input.employeeOfficeNumber)
     
    allEmployees.push(engineer)
     var output =  render(allEmployees)

    console.log(output)
    fs.writeFile("./team.html",output,function(err,results){
        if (err){
            console.log(err)
        }
    })
   askQuestions()
})
};

function addIntern(){
    inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "employeeName"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "employeeEmail"

    },
    {
        type: "input",
        message: "What is your office number",
        name: "employeeOfficeNumber"
    
    }
]).then(function(input){
    var intern = new Intern (input.employeeName , id++ , input.employeeEmail , input.employeeOfficeNumber)
     
    allEmployees.push(intern)
     var output =  render(allEmployees)

    console.log(output)
    fs.writeFile("./team.html",output,function(err,results){
        if (err){
            console.log(err)
        }
    })
   askQuestions()
})
};

 

 