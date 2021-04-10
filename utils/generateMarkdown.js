// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None') {
    return ``
  }
  
}


function renderLicenseLink(license) {}


function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
   Created by:
  ## ${data.github} | ${data.email}
  # Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Contributors](#contributors) 
  4. [How to test](#testing) 
  # Description
   ${data.description}
  # Installation:
   ${data.installation}
  # Contributors:
   ${data.contributors}
  # Testing:
   ${data.test}
  ## License:
   ${data.license}
  ${renderLicenseBadge(data.license)}
  
`;
}

module.exports = generateMarkdown;
