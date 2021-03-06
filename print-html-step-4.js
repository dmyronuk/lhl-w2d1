var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getHTML (options, callback) {
  https.get(options, printHTML);
};

function printHTML (res) {
  let outString = "";

  res.on("data", function(chunk){
    outString += chunk.toString();
  })

  res.on("end", function(){
    console.log(outString);
  })
};

getHTML(requestOptions);
