// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None') {
    return ``
  }
  
}

//  a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

//  function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}
  ## ${data.github} | ${data.email}
  ## Table of Contents
  1. Description
  2. Installation
  3. Contributors 
  4. How to test 
  # Description
   ${data.description}
  ## Installation:
   ${data.installation}
  ## Contributors:
   ${data.contributors}
  ## How to test:
   ${data.test}
  ## License:
   ${data.license}
  ${renderLicenseBadge(data.license)}
  
`;
}

module.exports = generateMarkdown;
