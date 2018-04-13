var app = require('express').createServer();
var pos = 0;
app.get('/',function(req,res) {
	pos = pos + 1;
	res.send("Hello World" + pos);
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
