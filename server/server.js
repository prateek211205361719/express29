
var express = require('express');
var bodyParser = require('body-parser');
var { objectId }  = require('mongoose');
var { mongoose} = require('./db/mongoose');
var { user } = require('./models/user');
var { todo } = require('./models/todo');
var port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json());
app.get('/todo', function(req, res){
     todo.find().then((result) => {
         res.send({
             result,
             status:200,
         });
     }, (err) => {
        res.status(400).send(err);
     });
});

app.get('/todo/:id', function(req, res){
    todo.findById(req.params.id).then((result) => {
        res.send({
            result
        });
    }, (err) => {
         res.status(400).send(err);
    });
   
});

app.post('/todo', function(req, res){
    var todo1 = new todo({
        text:req.body.text,
    });
    todo1.save().then((result) => {
        res.send(result);
    }, (err) =>{
         res.status(400).send(err);
    });
});

app.listen(port, () =>{
    console.log('-------------running-----');
});