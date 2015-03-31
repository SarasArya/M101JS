var MongoClient=require('mongodb').MongoClient,

server=require('mongodb').Server;

var mongoclient=new MongoClient(new server('localhost',27017));

mongoclient.connect('mongodb://localhost:27017/node_mongo',function(err,db)
{
        if(err) throw err;
        var db=mongoclient.db('course');
        var query={'grade':100};

        db.collection('grades').find(query).toArray(function(err,doc)
                {
                        if(err) throw err;
                        console.dir(doc);
                        db.close();
                });
});

