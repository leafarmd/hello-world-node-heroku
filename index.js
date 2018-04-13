var app = require('express').createServer();
var pos = 0;
app.get('/api',function(req,res) {
	pos = req.query.id;
	res.send(pos);
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
