var app = require('express').createServer();
var pos = 0;
app.get('/',function(req,res) {
	if(pos == 0) {
	  pos = 1;
	} else {
	  pos = 0;
	}
	res.send(pos);
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
