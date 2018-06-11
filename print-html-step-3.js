var https = require('https');

function getAndPrintHTML () {
  var outString = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(res){
    res.on("data", function(chunk){
      console.log(chunk.toString())
      outString += chunk.toString();
      //console.log("WHeeeeee", outString);
    })

     res.on("end", function(){
      console.log(outString);
     })
  });

}

getAndPrintHTML();
