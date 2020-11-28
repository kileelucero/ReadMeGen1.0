const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require('fs');
const path = require('path');

// array of questions for user
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title to your project?'
    },
    {type: 'input',
    name: 'description',
    message: 'Briefly describe your project'},
    {type: 'input',
    name: 'installation',
    message: 'Please specify any instructions for installing this application'},
    {type: 'input',
    name: 'usage',
    message: 'How can this application be used?'},
    {type: 'input',
    name: 'contribution',
    message: 'Solo project or contributing parties? (Please add their names and GitHub info)'},
    {type: 'input',
    name: 'username',
    message: 'Please provide your first and last name'},
    {type: 'input',
    name: 'githubInfo',
    message: 'Whats your username for GitHub?'},
    {type: 'input',
    name: 'email',
    message: 'Please provided a valid email address for inquiries'},
    {type: 'input',
    name: 'tests',
    message: 'Do you have special instructions required for running tests?'},
    {type: 'list',
    name: 'license',
    message: 'What license is required?',
    choices: ['none', 'Apache 2.0', 'GNU General Public v3.0', 'GNU Affero v3.0', 'GNU General Public v2.0', 'GNU Lesser General Public v2.1', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public 2.0',  'Mozilla Public 2.0', 'The Unlicense']
},
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (response) {
        writeToFile("README.md", generateMarkdown({
            response
        }))
    })
}

// function call to initialize program
init();