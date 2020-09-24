// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectTitle}
  ## Description
  * ${data.Description}
  ## Installation
  * ${data.Installation}
  ## Table of Contents
  * [ProjectTitle](#ProjectTitle)
  * [Description](#Description)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ## Usage
  * ${data.Usage}
  ## License
  * ${data.License}
  ## Contributing 
  * ${data.Contributing}
  ## Tests
  * ${data.Tests}
  ## Questions
  * ${data.Questions}
  `;
}

module.exports = generateMarkdown;
