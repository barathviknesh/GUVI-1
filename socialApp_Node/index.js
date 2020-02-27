const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const rounds = 10;

const uri = "mongodb://localhost:27017";



app.use(cors());
app.use(bodyParser.json());

loginUser:String;

function authenticate(req,res,next){
    const incomingToken = req.header('Authorization');
    jwt.verify(incomingToken,'yahhjsioiowkvgvhbj',function(err,decoded){
        if (decoded != undefined) {
            loginUser = decoded.userId;
            console.log(loginUser);
            console.log(typeof loginUser);
            console.log(decoded);
            next();
            
        } else {
            res.status(401).json({
                "message":"invalid user"
            });
        }
    });
}

app.get('/feeds', authenticate,function(req,res){
    mongoClient.connect(uri,function(err,client){
        if(err) throw err;
        console.log(loginUser);
        const db = client.db("socialdb");
        const result = db.collection("users").findOne({_id:ObjectID(loginUser)},{projection :{_id:false, feeds:true}});
        result.then(function(data){
            console.log(data);
            if(data != null){
                res.status(200).json({
                    "message":"success",
                    feeds:data
                });
            }else{
                res.status(400).json({
                    "message":"fetch failed"
                });
            }
            
            client.close();
        }).catch(function(err){
            res.status(500).json({
                "message":"internal server error"
            });
        });
    });
})

app.put('/post',authenticate,function(req,res) {
    mongoClient.connect(uri,function (err,client) {
       const db = client.db("socialdb");
       const result = db.collection("users").updateOne({_id:ObjectID(loginUser)},{$push: {feeds:req.body.feed}});
        result.then(function(data) {
            if (data != null) {
                //console.log("putting");
                res.status(200).json({
                    "message":"success",
                })
            }else{
                //console.log("not putting");
                res.status(400).json({
                    "message":"update failed"
                });
            }
            
        }).catch(function (err) {
            res.status(500).json({
                "message":"internal server error"
            });
        });
    });
});

app.post('/register',function(req,res){

    mongoClient.connect(uri,function(err, client){
        if(err) throw err;
        const db = client.db("socialdb");

        bcrypt.genSalt(rounds,function(err,salt){
            console.log(salt);
            bcrypt.hash(req.body.password,salt,function(err, hash){
                console.log(hash);
                db.collection("users").insertOne({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                    feeds:[]
                },function(err,result){
                    if(err) throw err;
                    client.close();
                    res.status(200).json({
                        "message":"success"
                    });
                });
            });
        });
      
    });
});

app.post('/login',function(req,res){
    mongoClient.connect(uri,function(err,client){
        if(err) throw err;
        const db = client.db("socialdb");
        const result = db.collection("users").findOne({username: req.body.username});
        result.then(function(data){
                if(data != null){
                    bcrypt.compare(req.body.password,data.password,function(err, isThere){
                        if(isThere == true){
                            const userId = data._id;
                            jwt.sign({
                                exp: Math.floor(Date.now() / 1000) + (60 + 60),
                                userId: userId,
                                access:"allow"
                            },"yahhjsioiowkvgvhbj",function(err,token){
                                if(err) throw err;
                                res.status(200).json({
                                    message:"success",
                                    token:token
                                });
                            });
                        }else{
                            res.status(404).json({"message":"invalid user"})
                        }
                    });
                    
                }
        }).catch(function(err){
            res.status(500).json({"message":"server error"})
        });

    });

});







app.listen(8000);