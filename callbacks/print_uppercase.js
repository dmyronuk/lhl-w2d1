var getHTML = require("./http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

var printUpperCase = function(str){
  console.log(str.toUpperCase());
}

getHTML(requestOptions, printUpperCase);