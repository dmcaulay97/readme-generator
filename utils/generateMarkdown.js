// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// This function draws the tag and lik info from the following repo: https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500#attribution-noncommmercial-sharealike-40-international
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case "Apache 2.0 License":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "BSD 3-Clause License":
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "BSD 2-Clause License":
      badge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
      link = "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case "Attribution 4.0 International":
      badge = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)(http://creativecommons.org/licenses/by/4.0/)";
      link = "http://creativecommons.org/licenses/by/4.0/";
      break;
    case "Attribution-ShareAlike 4.0 International":
      badge = "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-sa/4.0/)";
      link = "http://creativecommons.org/licenses/by-sa/4.0/";
      break;
    case "Attribution-NonCommercial 4.0 International":
      badge = "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc/4.0/)"
      link = "http://creativecommons.org/licenses/by-nc/4.0/";
      break;
    case "Attribution-NoDerivates 4.0 International":
      badge = "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nd/4.0/)";
      link = "http://creativecommons.org/licenses/by-nd/4.0/";
      break;
    case "Attribution-NonCommmercial-ShareAlike 4.0 International":
      badge = "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)";
      link = "http://creativecommons.org/licenses/by-nc-sa/4.0/";
      break;
    case "Attribution-NonCommercial-NoDerivatives 4.0 International":
      badge = "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-nd/4.0/)";
      link = "http://creativecommons.org/licenses/by-nc-nd/4.0/";
      break;
    case "Eclipse Public License 1.0":
      badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      link = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "GNU GPL v3":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
      link = "http://www.gnu.org/licenses/gpl-3.0";
      break;
    case "GNU GPL v2":
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](http://www.gnu.org/licenses/gpl-2.0)";
      link = "";
      break;
    case "GNU AGPL v3":
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";
      link = "http://www.gnu.org/licenses/agpl-3.0";
      break;
    case "GNU LGPL v3":
      badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)";
      link = "http://www.gnu.org/licenses/lgpl-3.0";
      break;
    case "GNU FDL v1.3":
      badge = "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)";
      link = "http://www.gnu.org/licenses/fdl-1.3";
      break;
    case "IBM Public License Version 1.0":
      badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      link = "https://opensource.org/licenses/IPL-1.0";
      break;
    case "The MIT License":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      link = "https://opensource.org/licenses/MIT";
      break;
    case "Mozilla Public License 2.0":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      link = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "The zlib/libpng License":
      badge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      link = "https://opensource.org/licenses/Zlib"
      break;
    case "none":
      badge = ""
      link = ""
      break;
  }
  return [badge, link];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//The liscense link fuunction has been removed because its function is encompased in the renderLicenseBadge function. This was done so the switch to determine which license was chosen does not have to be written twice;

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section;
  const [badge, link] = renderLicenseBadge(license);
  if (license == "none") {
    section = "";
    contents = "";
  } else {
    section = `# License ${badge}
    This project uses the ${license} license.
    
    License Link: ${link}`;
    contents = "- [License](#license)"
  }
  return [section, contents];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const [badge] = renderLicenseBadge(data.license);
  const [licenseSection, contents] = renderLicenseSection(data.license)
  return `# ${data.title} ${badge}
# Description
${data.description}

# Table of Contents
- [Installation](#installation)

- [Usage](#usage)

${contents}

- [Contributing](#contributing)

# Installation

# Usage

${licenseSection}

# Contributing

# Tests

# Questions

  `;
}

module.exports = {
  generateMarkdown
};

