// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//maybe not needed bc did it in generateMarkdown function
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//ifelse option just in case there is no license needed for data.license
function generateMarkdown(data) {
  return `# ${data.title}

${data.license ? data.license : ''}

## Description
  ${data.description}

`;
}

module.exports = generateMarkdown;
