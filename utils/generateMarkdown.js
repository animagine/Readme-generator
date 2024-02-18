// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ----

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ### Description
  ${data.description}

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Contribution
  ${data.license}

  ### Tests
  ${data.tests}

  ### Questions
  [Github Profile](https://github.com/${data.username})
  ${data.email}
`;
}

module.exports = generateMarkdown;
