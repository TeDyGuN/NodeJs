var http = require('http'),
    fs   = require('fs');

var html = fs.readFile('./index.html', function(err, data){
  
});

http.createServer(function(req, res){
    res.write(html);
    res.end();
}).listen(3000);