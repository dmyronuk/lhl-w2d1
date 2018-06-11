var https = require('https');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

var callback = function(res) {
  console.log('In response handler callback!');
  res.on("data", function(chunk){
    console.log(chunk.toString() + "\n");
  })
}

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(options, callback);
}

getAndPrintHTMLChunks();