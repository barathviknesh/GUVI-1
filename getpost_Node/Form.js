const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const mongoClient =  require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";



let arr =[];

app.use(cors());
app.use(bodyParser.json());

app.get('/users',function(req, res) {
   
    mongoClient.connect(url,function (err, client) {
        if(err) throw err;

        const db = client.db("usersdb");
        const list = db.collection("userForms").find().toArray();

        list.then(function(data) {
            res.json(data);
        }).catch(function(err){
            res.json(err);
        });

        client.close();
    })

   // sending data from array
    // res.json(arr);
});

app.post('/user',function(req,res){
    mongoClient.connect(url,function(err, client) {
        if (err) {
            throw err;
        }
       const db = client.db("usersdb");
        db.collection("userForms").insertOne(req.body,function (err,result) {
            if (err) {
                throw err
            }
            client.close();
            res.json({"status":"Success"})
        });
    })

    // storing internally in array
    //arr.push(req.body);
    //res.json({'ststus':'Success'});
});

app.put("/user/:fname",function(req,res) {
    mongoClient.connect(url,function(err,client) {
        if(err) throw err;
        const db = client.db("usersdb");
        // console.log(req.params.fname);
        let updateData = db.collection("userForms").update({"fname":req.params.fname},req.body);
        updateData.then(function(result){
            res.json(result);
        }).catch(function(err){
            res.json(err);
        });
        
        client.close();
    })
    
})

app.listen(8000);




