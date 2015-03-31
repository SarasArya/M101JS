var MongoClient=require('mongodb').MongoClient;
var request=require('request');
var server=require('mongodb').Server;
var mongoclient=new MongoClient(new server('localhost',27017));

mongoclient.connect("mongodb://localhost/27017/course",function(err,db)
{
if (err) throw err;

var db=mongoclient.db('course');
request('http://www.reddit.com/r/technology/.json',function(error,response,body)
{
  if(!error && response.statusCode==200)
   { 
     	var obj=JSON.parse(body);
	var stories=obj.data.children.map(function(story){return story.data;});
	db.collection('reddit').insert(stories,function(err,data)
	{
	if(err) throw err;
	console.dir(data);
	db.close();
	});
     }
});
});
