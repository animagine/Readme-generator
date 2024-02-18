const fs = require("fs");
const path = require('path');
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Describe your project",
        name: "description",
      },
      {
        type: "input",
        message:
          "Describe the steps required to install your project for the Installation section.",
        name: "Installation",
      },
      {
        type: "input",
        message: "Provide instructions on how to use this project",
        name: "Usage",
      },
      {
        type: "list",
        message: "Choose a license for your project.",
        name: "license",
        choices: [
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Mozilla Public License 2.0",
          "Apache License 2.0",
          "MIT License",
          "Boost Software License 1.0",
          "The Unlicense",
        ],
      },
      {
        type: "input",
        message:
          "Provide any tests written for this application and how to run them",
        name: "Tests",
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ];

// function to write README file
function writeToFile(fileName, data) {
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Awesome! Your README.md file has been created");
    });
  }
  const writeFileAsync = util.promisify(writeToFile);
  
}

// function to initialize program
function init() {

  inquirer
  .prompt(questions)
  .then((userResponses) => {
    console.log("Your responses: ", userResponses);
    console.log("Thank you! Fetching your GitHub data...");

     // Write markdown to file
     const markdown = generateMarkdown(userResponses);

     return writeFileAsync("README.md", markdown);
   })
   .then(() => {
     console.log("README.md has been created!");
   })
   .catch((error) => {
     console.log(error);
   });
}

// function call to initialize program
init();
