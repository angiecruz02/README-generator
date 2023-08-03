const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
.prompt ([
    {
        type: 'input',
        message: 'Enter the project title:',
        name: 'title',
    },
    {
        type:'input',
        message: 'Enter a description of the project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter the usage information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter the test instructions:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'githubUsername',
      },
      {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
      },
])
.then((answers) => {
    answers.tableOfContents = [
        'Description',
        'Installation',
        'Usage',
        'License',
        'Contributing',
        'Tests',
        'Questions',
      ];
    const README = generateMarkdown(answers);

    fs.writeFile('README.md', README, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

function init() {}

init();