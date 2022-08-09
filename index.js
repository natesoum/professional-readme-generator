// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a valid title name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: githubUsername => {
            if (githubUsername) {
                return true;
            } else {
                console.log("Please enter your GitHub username!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?',
        validate: motivationInput => {
            if (motivationInput) {
                return true;
            } else {
                console.log('Please enter a valid message for your motivation behind this project!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter a valid message for your why you built this project!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
        validate: problemInput => {
            if (problemInput) {
                return true;
            } else {
                console.log('Please enter what problem your project solves!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn from building this project?',
        validate: learnInput => {
            if (learnInput) {
                return true;
            } else {
                console.log('Please explain what you learned from building this project!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please explain how to install your application!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your instructions!')
                return false;
            }
        }
    },
    { 
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['apache', 'mit', 'mozilla', 'gnu', 'no license']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide how to contribute to your project.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution instructions!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test your application.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your test instructions!')
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
