function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GPL') {
    return '![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
  } else if (license === 'GPL') {
    return '[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `## License
    
This project is licensed under the ${renderLicenseLink(license)}. ${renderLicenseBadge(license)}`;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

${data.tableOfContents?.map((item) => `- [${item}](#${item.toLowerCase()})`).join('\n')}

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

If you have any questions about the usage of this application, you can reach out to me:

- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}

 `;
}

module.exports = generateMarkdown;
