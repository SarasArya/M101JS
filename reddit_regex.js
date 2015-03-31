var MongoClient=require('mongodb').MongoClient;
var server=require('mongodb').Server;

var mongoclient=new MongoClient(new server("localhost",27017));

mongoclient.connect("mongodb://localhost/27017/course",function(err,db)
{
	var db=mongoclient.db('course');
	var projection={"title":1,"_id":0};
	var query={title : {$regex  : "NSA"}};
	
	db.collection('reddit').find(query,projection).each(function(err,doc)
{
   if(err) throw err;
   if(doc==null)
     db.close();

   console.dir(doc);
});
});
