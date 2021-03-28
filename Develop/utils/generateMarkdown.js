// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } 
    return '';
}
renderLicenseBadge;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== 'None') {
  return `(https://opensource.org/licenses/${license})`;
} else
  return '';
}
renderLicenseLink;

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
 
  ## License
  ${data.license}\n
  ${renderLicenseBadge(data.license)}\n
  ${renderLicenseLink(data.license)}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions? Contact me at:
  * GitHub: ${data.gitHub}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;