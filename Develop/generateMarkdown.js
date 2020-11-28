// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

![license badge](https://img.shields.io/badge/license-${data.license}-blue)

## Table of Contents
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contribution](#contribution)
    *[Tests](#tests)
    *[License](#license)
    *[Questions](#questions)
  
## Description
    ${data.description}
## Installation
    ${data.installation}
## Usage
    ${data.usage}
## Contribution
    Repo Owner -
    ${data.username}
    GitHub Name -
    ${data.githubInfo}
    Email Address - 
    ${data.email}
    Additional Contributors - 
    ${data.contribution}
## Tests
Instructions to run tests - 
    ${data.tests}
## License
Licensed under - 
    ${data.license}
## Questions
Please forward all inquiries to Email - 
    ${data.questions}
  `;
  }
  
  module.exports = generateMarkdown;
  