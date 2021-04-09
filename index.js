// TODO: Include packages needed for this application

const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require(`./utils/generateMarkdown`);


// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe this project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install this application?',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Were there any contributors to this project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter instructions for testing:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license',
      choices: [
          'MIT',
          'Apache 2.0',
          'None',
      ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    }

  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => err ? console.log)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response) => {
        console.log(response);
    })
}

// Function call to initialize app
init();
