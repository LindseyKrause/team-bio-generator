const fs = require('fs');
const inquirer = require('inquirer');

//Prompt User 
inquirer
.prompt([
{
    type: 'input',
    name: 'employeename',
    message: 'What is your name?'
},

])
.then(function (data) {
    console.log("Employee name should appear after this");
console.log(data.employeename);
});



//Using .then put data into a function that will write an HTML file (fs.write file)
//Make separate files for writeHtml().js, 