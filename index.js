var app = require('express').createServer();
var resp = 0;
app.get('/api',function(req,res) {
	var id = req.query.id;
	if(id == 0){
	   res.send(id);
	}
});
app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
