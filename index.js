var app = require('express').createServer();
var resp = 0;
app.get('/api',function(req,res) {
	var id = req.query.id;
	
	  res.send(resp);
});
app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
