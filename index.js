var app = require('express').createServer();
var pos = 0;
app.get('/api',function(req,res) {
	
	res.send(req.query.id);
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
