// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter your Project Title.',
            name: 'title',
            validate: (value) => { if (value) { return true } else { return 'Please enter a project title.' } },
        },
        {
            type: 'input',
            message: 'Enter the Project Description',
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'Please enter a project description.' } },
        },
        {
            type: 'input',
            message: 'Enter the Usage Parameters',
            name: 'usage',
            validate: (value) => { if (value) { return true } else { return 'Please enter the parameters for usage.' } },
        },
        {
            type: 'checkbox',
            message: 'Choose the License Type needed.',
            name: 'license',
            choices: ['MIT', 'GNU GPLv3', 'ISC', 'Apache', 'None'],
            validate: (value) => { if (value) { return true } else { return 'Please select the most appropriate license.' } },
        },
        {
            type: 'input',
            message: 'Enter the Contributing User Information',
            name: 'contribution',
            validate: (value) => { if (value) { return true } else { return 'Please enter any contribution information.' } },
        },
        {
            type: 'input',
            message: 'Enter your Github username.',
            name: 'gitHub',
            validate: (value) => { if (value) { return true } else { return 'A GitHub username is required.' } },
        },
        {
            type: 'input',
            message: 'Enter your email address.',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'An email address is required.' } },
        },
    ])
    .then(data => {
        const readMeContent = generateMarkdown(data);
        console.log(data);

        fs.writeFile('ReadMe.md', readMeContent,  (error) => {
            if (error) {
              console.log(error)
          }
    });
})
// TODO: Create a function to write README file
// function writeToFile(generateMarkdown, data) {
//     fs.writeFile('./ReadMe', markdown, (error) => {
//         if (error) {
//           console.log(error)
//       }
//     `# ${data.title}

//   # Table of Contents
//   -[Description](#description)
//   -[Installation](#installation)
//   -[Usage](#usage)
//   -[Contribution](#contribution)
//   -[License](#license)

//   ##Description
//   ${data.description}
  
//   ##Installation
//   ${data.installation}
  
//   ##Usage
//   ${data.usage}
 
//   ##License
//   ${data.license}

//   ##Contribution
//   ${data.contribution}

//   #Contact
//   * GitHub: ${data.gitHub}
//   * Email: ${data.email}
// `;
//     })
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
