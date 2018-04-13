var app = require('express').createServer();
var resp = 0;
app.get('/api',function(req,res) {
	var id = req.query.id;
	if (id == "0") {
	   res.send(resp);
	}
	if (id == "1") {
	   resp = 1;
	}
	if (id == "2") {
	  resp = 0;
	}
});
app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
