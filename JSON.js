const express = require('express');
const fs = require('fs');
const app = express();

app.get('/books',(req,res)=>{
	fs.readFile(process.argv[3],(err,data)=>{
			if(err){
				console.log(err.message);
			}else{
				  books = JSON.parse(data);
			}
			res.json(books)
	});
}).listen(process.argv[2]);
