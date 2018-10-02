let express=require('express');
let route=express.Router();
let uppDB=require('../db/uppDB');

//route.get('/findAll',(req,resp)=>{
//	alumnusDB.findAll().then((data)=>{
//		// var a=data.length;
//		// var data=data.slice(0,a-1)
//		resp.send(data);
//	}).catch((error)=>{
//		resp.send(error);
//	});
//});

route.get('/findByName',(req,resp)=>{
		//  console.log('------------',req);
  uppDB.findByName(req.query.name).then((data)=>{
        resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = route;