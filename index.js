const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")  // import local function 


const questions = [
    {type: 'input', name: 'title', message: 'Project Title:' },
    {type: 'input', name: 'description', message: 'Provide a short description explaining the what, why, and how of your project:'},
    {type: 'input', name: 'installation', message: 'Provide the steps required to install your project:'}, 
    {type: 'input', name: 'usage', message: 'Provide instructions and examples for use:'}, 
    {type: 'list', name: 'license', message: 'Choose a License:', choices: ['Apache License 2.0', 'MIT License','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unlicense']},
    {type: 'input', name: 'contributing', message: 'Provide guidelines for contributing to this project:'}, 
    {type: 'input', name: 'tests', message: 'Provide instructions on how to run tests:'}, 
    {type: 'input', name: 'github', message: 'Author Gihub Profile:'},
    {type: 'input', name: 'email', message: 'Author Email:'}, 
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log("Error writing to file") : console.log(`Created file ${fileName}`));
}

function init() {
    fileName = 'README.md'
    inquirer.prompt(questions).then(answers => generateMarkdown(answers)).then(data => writeToFile(fileName, data))    
}

// Function call to initialize app
init();
