const express = require('express');
const app = express();
app.put('/message/:id',(req,res)=>{
	const id = req.params.id;
	const str = require('crypto').createHash('sha1')
							.update(new Date().toDateString() + id)
							.digest('hex');
	res.send(str);
}).listen(process.argv[2]);
