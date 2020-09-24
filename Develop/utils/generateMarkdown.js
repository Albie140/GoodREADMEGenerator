// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectTitle}
  ## ${data.Description}
  ## ${data.Installation}
  ## ${data.Usage}
  ## ${data.License}
  ## ${data.Contributing}
  ## ${data.Tests}
  ## ${data.Questions}
  `;
}

module.exports = generateMarkdown;
