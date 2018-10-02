let pool=require('./pool');

module.exports={
    //关键字查询
//  findAll(){
//      var sql="select * from upp";
////      console.log(sql);
//      return pool.execute(sql);
//  },
    findByName(name){
        var sql="select * from upp where name='"+name+"'";
        return pool.execute(sql);
    },

}