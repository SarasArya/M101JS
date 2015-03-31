var MongoClient=require('mongodb').MongoClient;
var server=require('mongodb').Server;

var mongoclient=new MongoClient(new server('localhost',27017));

mongoclient.connect('mongodb://localhost/27017/course',function(err,db)
{
var db=mongoclient.db('course');
//cursor.sort('grade',1);
//cursor.limit(4);
//cursor.skip(1);
//cursor.sort([['grade',1],['student',-1]]);
var options={
		 'skip':1,
		 'limit':4,
		'sort':[['grade',1],['student',-1]]
		};
var cursor=db.collection('grades').find({},{},options);
cursor.each(function(err,doc)
{
if (err) throw err;
  if(doc==null)
    return db.close();
  else 
    console.dir(doc);
});
});

