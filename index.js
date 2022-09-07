const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")


const questions = [
    {name: 'title', message: 'Project Title:' },
    {name: 'description', message: 'Project Description:'},
    {name: 'installation', message: 'Project Installation:'}, 
    {name: 'usage', message: 'Project Usage:'}, 
    {name: 'license', message: 'Project License:'}, 
    {name: 'contributing', message: 'Project Contributions:'}, 
    {name: 'tests', message: 'Tests:'}, 
    {name: 'email', message: 'Author Email:'}, 
    {name: 'github', message: 'Author Gihub Profile:'},
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
