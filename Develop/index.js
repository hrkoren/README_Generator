// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter your Project Title.',
            name: 'title',
            validate: (value) => {if(value){return true} else {return 'Please enter a project title.'}},
        },
        {
            type: 'input',
            message: 'Enter the Project Description',
            name: 'description',
            validate: (value) => {if(value){return true} else {return 'Please enter a project description.'}},
        },
        {
            type: 'input',
            message: 'Enter the Usage Parameters',
            name: 'usage',
            validate: (value) => {if(value){return true} else {return 'Please enter the parameters for usage.'}},
        },
        {
            type: 'input',
            message: 'Choose the License Type needed.',
            choices: ['MIT', 'GNU GPLv3', 'ISC', 'Apache', 'None'],
            name: 'license',
            validate: (value) => {if(value){return true} else {return 'Please select the most appropriate license.'}},
        },
        {
            type: 'input',
            message: 'Enter the Contributing User Information',
            name: 'contribution',
            validate: (value) => {if(value){return true} else {return 'Please enter any contribution information.'}},
        },
        {
            type: 'input',
            message: 'Enter your Github username.',
            name: 'gitHub',
            validate: (value) => {if(value){return true} else {return 'A GitHub username is required.'}},
        },
        {
            type: 'input',
            message: 'Enter your email address.',
            name: 'email',
            validate: (value) => {if(value){return true} else {return 'An email address is required.'}},
        }
    ])
// TODO: Create a function to write README file
function writeToFile(genMarkdown, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
