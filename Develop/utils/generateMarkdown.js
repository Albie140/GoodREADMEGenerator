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
  * This project is licensed under ${data.License}.
  ## Contributing 
  * ${data.Contributing}
  ## Tests
  * ${data.Tests}
  ## Questions?
  * User can contact me at ${data.Questions}.
  `;
}

module.exports = generateMarkdown;
