// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${licenses})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    * [License](#license)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Description](#description)
  * [Credits](#credits)
  ${renderLicenseSection(data.license)}

  ## [Description]

  What was your motivation behind this project?
  ${data.motivation}

  Why did you build this project?
  ${data.why}

  What problem does this project solve?
  ${data.problem}

  What did you learn from building this project?
  ${data.learn}

  ## [Installation]

  What are the steps required to install your project?
  ${data.installation}

  ## [Usage]

  Provide instructions and examples for use.
  ${data.usage}

  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)

  ## [Credits]

  If you followed tutorials, went through specific docs or third-party assets. Please list them here. 
  
  List your collaborators, if any. Please link their GitHub profile. 

${renderLicenseSection(data.license)}

## [Contributions]

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
${data.contribution}

## [Test]

Go the extra mile and write tests for your application. 
${data.test}

## [Questions]

Please contact me using the following links:

[GitHub](https://github.com/${data.githubUsername})

[Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
