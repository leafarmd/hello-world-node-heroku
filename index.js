var app = require('express').createServer();
var status = "desligado";
app.get('/',function(req,res) {
	var id = req.query.id;
	if(id == 1) {
		status = "ligado";
	}
	if(id == 0) {
		status = "desligado";
	}
	res.send("<" + status + ">");
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
