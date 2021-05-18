// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gm = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter Title:",
        name: "title"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.lerror(err) : console.log("success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const markDown = gm.generateMarkdown(data);
            writeToFile("generatedReadme.md", markDown);
        })

}

// Function call to initialize app
init();
