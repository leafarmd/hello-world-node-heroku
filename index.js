var app = require('express').createServer();
var cont = 0;
app.get('/',function(req,res) {
	res.send(cont);
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});

