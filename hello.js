var http = require('http'),
    fs   = require('fs');

fs.readFile('./index.html', function(err, data){
  http.createServer(function(req, res){
      res.write(data);
      res.end();
  }).listen(3000);
});
