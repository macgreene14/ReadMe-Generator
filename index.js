const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")


const questions = [
    {name: 'title', message: 'Project Title:' },
    {name: 'description', message: 'Project Description:'},
    {name: 'installation', message: ''}, 
    {name: 'usage', message: ''}, 
    {name: 'license', message: ''}, 
    {name: 'contributing', message: ''}, 
    {name: 'tests', message: ''}, 
    {name: 'email', message: ''}, 
    {name: 'github', message: ''},
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), (err) => err ? console.log("Error writing to file") : console.log(`Created file ${fileName}`));
}

function init() {
    fileName = 'README.md'
    inquirer.prompt(questions).then(answers => generateMarkdown(answers)).then(data => writeToFile(fileName, data))    
}

// Function call to initialize app
init();
