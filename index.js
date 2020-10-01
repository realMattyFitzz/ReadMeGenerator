const inquire = require("inquirer")
const fs = require("fs")
const markdown = require("./utils/generateMarkdown")
const questions = require("./utils/questions")

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log("file written")
    })
}

// function to initialize program
function init() {
    inquire.prompt(questions)
    .then(function(data){
        const readme = markdown(data);
        writeToFile(`${data.title}-README.md`, readme)
    })
}

// function call to initialize program
init();