let express=require('express');
let route=express.Router();
let downDB=require('../db/downDB');

//route.get('/findAll',(req,resp)=>{
//grioupDB.findAll().then((data)=>{
//	var a=data.length;
//	// console.log('++++++',data[a-1].grioup.id);
//	var k=0;
//
//	 	 resp.send(data);
// 
//}).catch((error)=>{
//  resp.send(error);
//});
//});

route.get('/findByName',(req,resp)=>{
  downDB.findByName(req.query.name).then((data)=>{
  		// console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//录入


module.exports = route;