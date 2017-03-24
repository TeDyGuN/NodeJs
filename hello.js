var http = require('http'),
    fs   = require('fs');


http.createServer(function(req, res){
  fs.readFile('./index.html', function(err, data){
    res.writeHead(200, {"Content-Type":"application/json"});
    res.write(JSON.stringify({nombre: "Ted Carrasco", username:"tedygun"}));
    res.end();
  });
}).listen(3000);
