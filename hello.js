var http = require('http'),
    fs   = require('fs');


http.createServer(function(req, res){
  fs.readFile('./index.html', function(err, data){
    var html_string = data.toString();
    //Expresion regular que busca {x}
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var nombre = 'Ted';

    for (var i = 0; i < variables.length; i++) {
      //lo ejecutamos con codigo de javascript
      var value = eval(variables[i]);
      //Reemplazar el contenido de llaves por su valor correspondiente
      html_string = html_string.replace("{"+variables[i]+"}", value);
    }


    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(html_string);
    res.end();
  });
}).listen(3000);
