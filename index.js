//constants-----------------------------------------------------
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Choices = require('inquirer/lib/objects/choices');
const Employee = require('./lib/Employee');
const generateManager = require('./src/manager-html');
const teamArray = [];
//Start Logic--------------------------------------------------
//add team member to determine next function--------------------
function addTeamMember() {
    const questions = [
        {
            type: 'confirm',
            name: 'anotherTeamMember',
            message: 'Would you like to add a(nother) team member?',
            default: 'false',
        },
    ];
    inquirer.prompt(questions).then((answers) => {
        determineRole(answers);
    })
};
//team member role ask user what kind of team member they would like to add.----------------------------------------------------------------------------
function determineRole(confirm) {
    if (confirm.anotherTeamMember === true) {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'pickTeamMember',
                    message: 'What type of team member would you like to add?',
                    choices: ["manager", "engineer", "intern"]
                },
            ])
            .then((answers) => {
                if (answers.pickTeamMember === "manager") {
                    addManager();
                }
                else if (answers.pickTeamMember === "engineer") {
                    addEngineer();
                }
                else if (answers.pickTeamMember === "intern") {
                    addIntern();
                }
            })
    }
    //If user says they do not want to add another employee, filter through team array, pick managers & Write file-----------------------------------------------------------------------

    else {
        teamArray.filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager));
        const html = generateHtml(teamArray);
        writeToFile('testHTML.html', (html));
    };
}
//once role determined go to one of the following add roles--------------------
//Add Manager Info from User Input---------------------------------------------
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
            console.log("Manager object should appear after this");
            console.log(data);
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
            teamArray.push(manager);
            addTeamMember();
            generateManager(manager);
        });
};
//Add Intern Info from User Input----------------------------------------------
function addIntern() {
    //Prompt User 
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the intern\'s name?'
            },

            {
                type: 'input',
                name: 'internId',
                message: 'What is your  intern\'s id?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is your  intern\'s email?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is your  intern\'s school?'
            },
        ])
        .then(data => {
            console.log("Intern object should appear after this");
            console.log(data);
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            teamArray.push(intern);
            addTeamMember();
        });
};
//Add Engineer Info from User Input--------------------------------------------
function addEngineer() {
    //Prompt User 
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineer\'s name?'
            },

            {
                type: 'input',
                name: 'engineerId',
                message: 'What is your  engineer\'s id?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is your  engineer\'s email?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is your  engineer\'s Github?'
            },
        ])
        .then(data => {
            console.log("Engineer object should appear after this");
            console.log(data);
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            teamArray.push(engineer);
            addTeamMember();
        });
};
//Ask user if they would like to add another team member----------------------
addTeamMember();
//Write HTML file function----------------------------------------------------
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, function (err) {
        if (err) throw err;
        console.log('file written');
    })
};
//Entire HTML Generate Function---------------------------------------------
generateHtml = function (employeeInfo) {
    return `
    <!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Awesome!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    </head>
    <body>
    <section class="section">
    <div class="container">
        <h1 class="The Crew">
        </h1>
    </div>
    <section class="section">
    <div class="container">
    ${generateManager(employeeInfo)}
    </div>
    </section>
    </body>
</html>
`;
}
//Module Exports----------------------------------------------------------
module.exports = addManager;