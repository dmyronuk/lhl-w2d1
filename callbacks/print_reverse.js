var getHTML = require("./http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

var printReverse = function(str){
  var newOut = str.split(" ").reverse().join();
  console.log(newOut);
}

getHTML(requestOptions, printReverse);