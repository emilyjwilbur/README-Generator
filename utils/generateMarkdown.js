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
  ## ${data.description}
  ## ${data.installation}
  ## ${data.contributors}
  ## ${data.test}
  ## ${data.license}
  ${renderLicenseBadge(data.license)}
  ## ${data.github}
  ## ${data.email}
`;
}

module.exports = generateMarkdown;
