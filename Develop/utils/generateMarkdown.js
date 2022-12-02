//generates all of the titles and their data to show up on the file

function generateMarkdown(data) {
  return `# ${data.title}

${data.license ? data.license : ''}

## Description
  ${data.description}

## Table of Contents 

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)


## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Contributing
  ${data.contributing}  

## Tests
  ${data.test}

## Questions
if you have any additional questions, please email me at -- ${data.questions}

My Github username -- @${data.username}

The link to my Github -- ${data.profileLink}

`;
}

module.exports = generateMarkdown;
