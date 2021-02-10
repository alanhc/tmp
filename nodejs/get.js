const fetch = require("node-fetch");
fetch('https://raw.githubusercontent.com/alanhc/tmp/master/data/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
