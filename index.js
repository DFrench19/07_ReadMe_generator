// array of questions for user
const questions = [
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
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'desctiption',
    },
    {
        type: 'input',
        message: 'What kind of license should your project have?',
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
]
.then(({name, email, description, github, license, info, contirbuting, test, command}) => {
    const html = `<!DOCTYPE html>
    <html lang=“en-us”>
    <body>
        <p>${ github }</p>
        <p>${ email }</p>
        <p>${ name }</p>
        <p> ${description }</p>
        <p>${ license }</p>
        <p>${ info }</p>
        <p>${ contirbuting }</p>
        <p> ${test }</p>
        <p>${ command }</p>
    </body>
</html>`









// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

})