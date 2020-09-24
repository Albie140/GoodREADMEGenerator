var fs= require("fs");
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown.js")


// array of questions for user
const questions = [ {
    type: "input",
    name: "ProjectTitle",
    message:"What is the Title of your project?"
},
{
    type:"input",
    name: "Description",
    message: "Describe your project in 1-2 sentences",
},
{
    type:"input",
    name: "Installation",
    message:"Briefly describe how to install your application"
},
{
    type:"input",
    name:"Usage",
    message:"Briefly describe how to use your application"
},
{
    type:"checkbox",
    name:"License",
    message:"Please choose the license for your application. Click space to choose an option",
    choices: ["MIT-[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ", "APACHE2.0-[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ", "GPL3.0-[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "None"]
},
{
    type:"input",
    name: "Contributing",
    message: "Who contributed to this application?"
},
{
    type:"input",
    name:"Tests",
    message:"How do you run tests in your application?"
},
{
    type:"input",
    name:"Questions",
    message:"Please provide the email and gitHub profile users can contact with any questions."
}

];

// function to write README file
function writeToFile(fileName, data) {
   
   return fs.writeFileSync(fileName, data, {encoding: "utf8"})
// console.log(fileName);
// console.log(data)
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(function(answer){
    writeToFile("generatedREADME.md", generateMarkdown(answer))
    console.log(answer)
})
}

// function call to initialize program
init();

  