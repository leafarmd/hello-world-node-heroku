var app = require('express').createServer();
var cont = 0;
app.get('/',function(req,res) {
	var id = req.query.id;
	if(id == 1) {
		cont = 1;
	}
	if(id == 0) {
		cont = 0;
	}
	res.send("" + cont);
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
