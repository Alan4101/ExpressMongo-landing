const express = require('express');
const mongoose = require('mongoose');
const walk = require('walk');

app = express();

const files_customer = [];
const file_work = [];
const walker_customer = walk.walk('./public/img/customer', {followLinks: false});
const walker_work = walk.walk('./public/img/work', {followLinks: false});

walker_customer.on('file', (root, stat, next)=>{
    files_customer.push('../img/customer/'+ stat.name);
   next();
});
walker_work.on('file',(root, stat, next)=>{
    file_work.push('../img/work/'+ stat.name);
    next();
});
// walker.on('end', ()=> console.log(files));
walker_work.on('end', ()=> console.log(file_work));

app.set('view engine' ,'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('index', { files_customer, file_work } ));

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