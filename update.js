var MongoClient=require('mongodb').MongoClient;
var server=require('mongodb').Server;

var mongoclient=new MongoClient(new server("localhost",27017));

mongoclient.connect('mongodb://localhost/27017',function(err,db)
{
  
  var db=mongoclient.db('weather');
  var options={sort:[["State",1],["Temperature",-1]]};
  var cursor=db.collection('data').find({},{},options);
  var state="";
  var option={multi:true};
cursor.each(function(err,doc)
{ 
  if(doc==null)
   { 
   console.dir("Db closed");
     }
  if(state!=doc.State)
{ console.dir(doc);  
 state=doc.State;
 var query={_id : doc._id};   
 var operator= {$set: {"month_high": true}};

  db.collection('data').update(query,operator,option,function(err,updated)
{
  if(err) throw err;
  console.dir("Successfully updated "+ updated+ "document");
  
});
}
});


});  
