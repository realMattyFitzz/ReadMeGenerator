const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");



const writeFileAsync = util.promisify(fs.writeFile);






// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            // Title
            type: "input",
            message: "What is the name of your project?",
            name: "title",
        },
        {
            // Description
            type: "input",
            message: "Description of project?",
            name: "description",
        },
        {
            // Installation
            type: "input",
            message: "What are the installation instructions for this project?(Write NONE if not applicable)",
            name: "installation",
        },
        {
            // Usage
            type: "input",
            message: "How would you like this application to be used?",
            name: "usage",
        },
        {
            // License
            type: "checkbox",
            message: "Select license",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3",
            ],
        },

        {
            // Contributing
            type: "input",
            message: "Who contributed?",
            name: "contribution",
        },
        {
            // Tests
            type: "input",
            message: "What are the test instructions?",
            name: "test",
        },
        {
            // Questions
            type: "input",
            message: "What is your GitHub username?",
            name: "username",

        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        }
    ])

}
function generateMarkdown(response) {
    return `# ${response.title}

    # Table of Contents # 

    -- [Description](#description) --
    -- [Installation](#installation) --
    -- [Usage](#usage) --
    -- [License](#license) --
    -- [Contribution](#contribution) --
    -- [Tests](#test) --
    -- [Questions](#questions) --

    ## Description:
    [License](https://img.shields.io/github/license-${response.license}-blue.svg)
    
    ${response.description}
    ## Installation
    ${response.installation}
    ## Usage 
    ${response.contribution}



  
  `;
}

module.exports = generateMarkdown;
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
