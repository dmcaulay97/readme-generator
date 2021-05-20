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
    },
    {
        type: "input",
        message: "Enter Description:",
        name: "description"
    },
    {
        type: "list",
        message: "Choose a license:",
        name: "license",
        choices: ["Apache 2.0 License", "BSD 3-Clause License", "BSD 2-Clause License", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International", "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International", "Eclipse Public License 1.0", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "IBM Public License Version 1.0", "The MIT License", "Mozilla Public License 2.0", "The zlib/libpng License", "none"]
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
