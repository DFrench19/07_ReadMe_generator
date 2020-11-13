const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./generateMarkdown.js')



// array of questions for user
const questions =
    ([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your project name.',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'Please write a short description of your project.',
            name: 'desctiption',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            choices: ["MIT", "APACHE 2.0", "GPL", "BSD3"],
            name: 'license',
        },


        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'command',
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What doses the user need to know about using the repo?',
            name: 'info',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contirbuting to the repo?',
            name: 'contirbuting',
        },
    ])

// function to write README file
function writeToFile(fileName, date) {
   fs.writeFile(fileName, date, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Generating ReadMe....")
    })
}
const writeFileAsync = util.promisify(writeToFile);

// // function to initialize program
async function init() {
    try {
        const Responses = await inquirer.prompt(questions);
        console.log("Your responses: ", Responses);

        console.log("Generating README...")
        const markDown = generateMarkdown(Responses);
        console.log(markDown);

        await writeFileAsync('README.md', markDown);
    }
    catch (error) {
        console.log(error)
    }
}

// // function call to initialize program
init();

