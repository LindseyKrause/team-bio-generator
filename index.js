const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./src/html-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Choices = require('inquirer/lib/objects/choices');
const teamArray = [];

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
//team member role-----------------------------------------------
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
    else {
        console.log('nope nope nope');
        console.log(teamArray);
    };
}
//once role determined go to one of the following add roles--------------------
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
        });
};

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
                name: 'enginnerEmail',
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
addTeamMember();
//store in array
//send array to build HTML. 

//Using .then put data into a function that will write an HTML file (fs.write file)
//Make separate files for writeHtml().js, 