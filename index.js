const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./src/html-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const teamArray = [];

function addManager() {
//Prompt User 
inquirer
.prompt([
{
    type: 'input',
    name: 'managerName',
    message: 'What is the manager\'s name?'
},

{
    type: 'input',
    name: 'managerId',
    message: 'What is your  manager\'s id?'
},
{
    type: 'input',
    name: 'managerEmail',
    message: 'What is your  manager\'s email?'
},
{
    type: 'input',
    name: 'managerOfficeNumber',
    message: 'What is your  manager\'s office number?'
},
])
.then(data => {
    console.log("Manager name should appear after this");
console.log(data);
const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
teamArray.push(manager);
});
};
addManager();
//add team member
//manager, intern, engineer, 
//build them
//store in array
//send array to build HTML. 

//Using .then put data into a function that will write an HTML file (fs.write file)
//Make separate files for writeHtml().js, 