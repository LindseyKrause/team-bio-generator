// const generateManager = require('./manager-html');

generateHtml = function (employeeInfo) {
  return `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Awesome!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="The Crew">
      </h1>
    </div>
    <section class="section">
    <div class="container">
    </div>
  </section>
  </body>
</html>



    `;
}
module.exports = generateHtml();