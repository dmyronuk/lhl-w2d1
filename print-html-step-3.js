var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getAndPrintHTML (options) {
  var outString = "";

  /* Add your code here */
  https.get(options, function(res){
    res.on("data", function(chunk){
      outString += chunk.toString();
    })

     res.on("end", function(){
      console.log(outString);
     })
  });

}

getAndPrintHTML(requestOptions);
