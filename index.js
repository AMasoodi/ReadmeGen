// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const fs = require ("fs")
const {writeFile}= fs.promises
const genReadme=require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"Repostory Title"
    },{
        type:"input",
        name:"description",
        message:"Provide a short description"
    },{
        type:"input",
        name:"installation",
        message:"Provide a short desWhat are the steps to install your project?"
    },{
        type:"input",
        name:"usage",
        message:"Provide instructions and examples for use"
    },{
        type:"input",
        name:"credits",
        message:"Provide a short dList your collaborators" 
    },{
        type:"input",
        name:"license",
        message:"List your licenses"
    },{
        type:"input",
        name:"badges",
        message:"lisst your badges" 
    },{
        type:"input",
        name:"features",
        message:"List your features" 
    },{
        type:"input",
        name:"how to contribute",
        message:"application for contribution"
    },{
        type:"input",
        name:"tests",
        message:"testing methods"
    }
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
await writeFile(fileName,data)
console.log("Job's Done")
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions)
    const readmeText=genReadme(answers)
    writeToFile("README.md",readmeText)
}

// Function call to initialize app
init();
