// function to generate markdown for README
function generateMarkdown(Responses) {
  let draft = `Table of Contents`;

  if (Responses.command !== '') {
    draft += `
   [Command](#command)`};
  if (Responses.info !== '') {
    draft += `
   [Info](#info)`};
  if (Responses.contributing !== '') {
    draft += `
   [Contributing](#contributing)`};
  if (Responses.test !== '') {
    draft += `
   [Test](#test)`};
   if (Responses.license !== '') {
    draft += `
   [License](#license)`};

  let markDown =``
  if (Responses.title !== '') {
    markDown +=
      `
     ${Responses.title}`
  }

  markDown += draft

  if (Responses.github !== '') {
    markDown +=
      `
  
      ${Responses.github}`
  };


  if (Responses.description !== '') {
    markDown +=
      `

      #Description
  
      ${Responses.description}`
  };
  
  if (Responses.command !== '') {
    markDown +=
      `

    #Install


    ${Responses.command}`
  };

  if (Responses.info !== '') {
    markDown +=
      `

    #Information

    ${Responses.info}`
  };

  if (Responses.contributing !== '') {
    markDown +=
      `

    #Contributing


    ${Responses.contributing}`
  };

  if (Responses.test !== '') {
    markDown +=
      `

    #Tests

    ${Responses.test}`
  };

  if (Responses.license !== '') {
    markDown +=
      `

    #License

    ${Responses.license}`
  };
  if (Responses.email !== '') {
    markDown +=
      `

    #Email


    ${Responses.email}`
  };

  return markDown;

}

module.exports = generateMarkdown;
