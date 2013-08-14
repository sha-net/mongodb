var MongoClient = require('mongodb').MongoClient
	, format = require('util').format
	, config = require('./config')
	, express = require('express')
	, app = express();    

/*app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res)
{
    res.render('index.html',{title:'My Title',body:'My Body'});
});
app.listen(80);
console.log('Listening on port 80');
*/

MongoClient.connect('mongodb://mongo-shard-shavit-333065997.us-east-1.elb.amazonaws.com:27017/mydb', function(err, db) {
 if(err) throw err;

//get list of collections
db.collectionNames(function(err, collections){
    var tmp;
    
    //aCollection = collections;
    for(var i=0;i<collections.length;i++){
        tmp = JSON.stringify(collections[i]).split(":");
        console.log(tmp[0].substr(1) + ":" + tmp[1].substr(0, tmp[1].length - 1));
    }
    db.close();
    //console.log(collections[0]);
    //var jsonString = {}; // = JSON.stringify(a);//JSON.stringify(a);
    //jsonString = a;
    //console.log(jsonString[1]);
});



/* var collection = db.collection('zip');
 collection.insert({a:2}, function(err, docs) {

  var map = function(){
   if(this.city){
   
    //emit(this.country,{votes:1});
    emit(this.pop,this.city);
   }
  }
  
  var reduce = function(key, values){
   var reducedObject = {
    city: "",
    total: 0
   };
   
   if(values.length){
    values.forEach(function(value){
     reducedObject.city += value + ", ";
     reducedObject.total += 1;
    });
   }
   return reducedObject;
  };

  collection.mapReduce(
   map,
   reduce,
   {
    
    out: 'map_reduce_collection'
   }
   , function (err, collection, stats){            
    if( err ) {
     console.log('Map reduce: Fail.');        
    }
    else {      
     console.log('Map reduce: Success.');
    }
    db.close();
   });
});
*/});
