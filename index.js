// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'',
        name:'',
        message:'',
        validate: titleName => {
            if (titleName) {
                return true;
            } else {
                console.log("Please enter a valid title name!");
                return false;
            }
        }
    },
    {
        type:'',
        name:'',
        message:'',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
