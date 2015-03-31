var MongoClient=require('mongodb').MongoClient;
var server=require('mongodb').Server;

var mongoclient=new MongoClient(new server('localhost',27017));

mongoclient.connect('mongodb://localhost/27017/course',function(err,db)
{
  var db=mongoclient.db('course');
  var query={'grade':100};
  var projection={'student':1,'_id':0};

  db.collection('grades').find(query,projection).toArray(function(err,docs){

docs.forEach(function(doc)
{
  console.dir(doc);
  console.log(doc.student+" got a goof grade");
});
db.close();
});
});
