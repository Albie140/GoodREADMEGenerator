// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectTitle}
  ## ${data.Description}
  ## Installation
  * ${data.Installation}
  ## Table of Contents
  * ${data.ProjectTitle}
  * ${data.Description}
  * ${data.Usage}
  * ${data.License}
  * ${data.Contributing}
  * ${data.Tests}
  * ${data.Questions}
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
