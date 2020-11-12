// function to generate markdown for README
function generateMarkdown(Responses) {
  let draft = `Table of Contents`;

  if (Responses.command !== '') {
    draft += `
  - [Command](#command)`};
  if (Responses.info !== '') {
    draft += `
  - [Info](#info)`};
  if (Responses.contributing !== '') {
    draft += `
  - [Contributing](#contributing)`};
  if (Responses.test !== '') {
    draft += `
  - [Test](#test)`};

  let markDown =
    `# ${Responses.title}`

  if (Responses.title !== '') {
    markDown += `
    [Title](#title)`};

  let draft2 = `Description`;

  if (Responses.description !== '') {
    draft2 += `
  - [Description](#description)`};

  markDown += draft;
  markDown+= `
  -[License](#license)`;

  if (Responses.command !== '') {
    markDown +=
    `
    #Install

    -How to install appilacation-

    ${Responses.command}`
  };

  if (Responses.info !=='') {
    markDown =+
    `
    #Information

    -steps on how to use the application
    `
  }
  return markDown;

}

module.exports = generateMarkdown;
