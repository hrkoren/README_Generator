// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === 'MIT') {
    license.license = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (data.license === 'Apache') {
    license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
  } else if (data.license === 'GNU GPLv3') {
    license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (data.license === 'ISC') {
    license = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
  } else
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (data.license === 'MIT') {
  license.license = `(https://opensource.org/licenses/Apache-2.0)`;
} else if (data.license === 'Apache') {
  license = `(https://opensource.org/licenses/Apache-2.0)`;
} else if (data.license === 'GNU GPLv3') {
  license = `(https://www.gnu.org/licenses/gpl-3.0)`;
} else if (data.license === 'ISC') {
  license = `(https://opensource.org/licenses/ISC)`;
} else
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
   

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
 
  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  # Contact
  * GitHub: ${data.gitHub}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;