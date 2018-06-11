function getHTML (options, callback) {
  var https = require('https');
  var outString = "";

  https.get(options, function(res){
    res.setEncoding("utf8");

    res.on("data", function(chunk){
      outString += chunk.toString();
    })

    res.on("end", function(end){
      callback(outString);
    })
  })
};

module.exports = getHTML
