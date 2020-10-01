function generateMarkdown({license, title, description, installation, usage, contributing, tests, email, username}) {
  return `
  ![license badge](https://img.shields.io/badge/license-${license}-blue)
  # ${title}
  ## DESCRIPTION
  ${description}
  ## TABLE OF CONTENTS
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  ## INSTALLATION
  Please run \`${installation}\` in the command line to install dependencies.
  ## USAGE
  ${usage}
  ## LICENSE
  This project is licensed under the ${license} license.
  ## CONTRIBUTING
  ${contributing}
  ## TESTING
  To run tests, please run \`${tests}\` in the command line
  ## QUESTIONS
  All inquiries can be sent to ${email}, and be sure to check out more of my GitHub projects at [${username}](https://www.github.com/${username})!
`;
}

module.exports = generateMarkdown;