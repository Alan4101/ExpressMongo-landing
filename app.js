const express = require('express');
const mongoose = require('mongoose');

app = express();

app.set('view engine' ,'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('index'));

mongoose.Promise = global.Promise;

mongoose.connection
    .on('error', error => console.log(error))
    .on('close', ()=> console.log("database connection closed"))
    .once('open', ()=>{
        const info = mongoose.connections[0];
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    });
mongoose.connect('mongodb://localhost:27017/portfolio', {useNewUrlParser: true});
//catch 404 and forward to error handler
app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status= 404;
    next(err);
});

app.listen(3000,()=> {
    console.log('App listening on port 3000!');
});