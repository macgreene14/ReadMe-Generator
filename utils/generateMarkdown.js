// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (license ? `![License Badge](https://img.shields.io/badge/License-${license}-green)` : '');
}

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return (license ? `[License: ${license}](https://choosealicense.com/licenses/${license}/)` : '')
}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const resource_lookup = {
    'Apache License 2.0': 'apache-2.0', 
    'MIT License': 'mit',
    'GNU AGPLv3': 'agpl-3.0', 
    'GNU GPLv3': 'gpl-3.0', 
    'GNU LGPLv3': 'lgpl-3.0', 
    'Mozilla Public License 2.0': 'mpl-2.0', 
    'Boost Software License 1.0': 'bsl-1.0', 
    'The Unlicense': 'unlicense',
  }
  const license_resource = resource_lookup[license]

  const badge = renderLicenseBadge(license_resource)

  const link = renderLicenseLink(license_resource)

  const licenseSection = 
  `${badge}
  
  ${link}`
  
  return licenseSection
} 

// generate markdown for README
function generateMarkdown(answers) {

  return `# ${answers.title}
  
  ## Description 
  
  ${answers.description}
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${answers.installation}
    
  ## Usage
  
  ${answers.usage}
  
  ## License
  
  ${renderLicenseSection(answers.license)}
    
  ---

  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

  ## Contributing
  
  ${answers.contributing}
    
  ## Tests
  
  ${answers.tests}
  
  ## Questions?

  Please reach out to me over Email or Github with additional questions. 

  Github: [${answers.github}](https://github.com/${answers.github})

  Email: ${answers.email}

  `
  }

module.exports = generateMarkdown;
