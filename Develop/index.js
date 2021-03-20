// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter your Project Title.',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter the Project Description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter the Table Contents.',
            name: 'toc',
        },
        {
            type: 'input',
            message: 'Enter the Usage Parameters',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Choose the License Type needed.',
            choice: ,
            name: 'license',
        },
        {
            type: 'input',
            message: 'Enter the Contributing User Information',
            name: 'license',
        },
    ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
