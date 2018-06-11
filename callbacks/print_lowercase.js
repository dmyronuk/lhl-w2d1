var getHTML = require("./http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

var printLowerCase = function(str){
  console.log(str.toLowerCase());
}

getHTML(requestOptions, printLowerCase);