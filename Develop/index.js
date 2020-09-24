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
    message: "Briefly describe your project",
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
    message:"Please choose the license for your application",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "None"]
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
    message:"What email can users contact with questions?"
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
    
