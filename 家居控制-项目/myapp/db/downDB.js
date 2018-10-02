let pool=require('./pool');

module.exports={
    //关键字查询
    findByName(name){
        var sql="select * from down where name='"+name+"'";
        return pool.execute(sql);
    }

}