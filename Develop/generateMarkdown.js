// function to generate markdown for README
function generateMarkdown(data) {
  // ***Table of Contents
  let tableContents = `
## Table of Contents
`;

  if (data.installation !== '') {
    tableContents += `
* [Installation](#installation)`
  };

  if (data.usage !== '') {
    tableContents += `
* [Usage](#usage)`
  };

  if (data.contribution !== '') {
    tableContents += `
* [Contribution](#contribution)`
  };

  if (data.tests !== '') {
    tableContents += `
* [Tests](#tests)`
  };

  tableContents += `
* [License](#license)
* [Questions](#questions)
`;

  // ***Required Section
  let required = `# ${data.title}
![License: ${data.license}](https://img.shields.io/badge/License-${(data.license).replace(/\s/g, "%20")}-blue.svg)
## Description
${data.description}
`;

  if (data.githubInfo) {
    required += `
Link to live site: [${data.title}](https://${data.githubInfo}.github.io/${data.title}/)
`
  };

  // ****Optional Section
  let optional = `
`;

  if (data.installation !== '') {
    optional += `## Installation
${data.installation}
`
  };

  if (data.usage !== '') {
    optional += `## Usage
${data.usage}
`
  };

  optional += `## License
${data.license}
Copyright (c) 2020 ${data.username}
## Contribution
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owner(s) of this repository before making a change.
`;

  if (data.tests !== '') {
    optional += `## Tests
${data.tests}
`
  };

  optional += `## Questions
For any questions the author can be contacted at:
GitHub: @[${data.githubInfo}](https://github.com/${data.githubInfo})
Email: ${data.email}
`;

  return required += tableContents += optional
}

module.exports = generateMarkdown;