const express = require('express');
const mongoose = require('mongoose');
// lib for files
const walk = require('walk');
const conf = require('./config');
const app = express();

const router = require('./routes');
app.use('/api', router.msg);
app.use('/api', router.post);

// we get name files in img folder
// arrays for name picture
const files_customer = [];
const file_work = [];

const walker_customer = walk.walk('./public/img/customer', {followLinks: false});
const walker_work = walk.walk('./public/img/work', {followLinks: false});

walker_customer.on('file', (root, stat, next)=>{
    // files_customer.push(root +'/'+ stat.name);
    // ./public/img/customer/$name_file
    files_customer.push('../img/customer/'+ stat.name);
    next();
});
walker_work.on('file',(root, stat, next)=>{
    file_work.push('../img/work/'+ stat.name);
    next();
});

//result array
// walker.on('end', ()=> console.log(files));
// walker_work.on('end', ()=> console.log(file_work));

app.set('view engine' ,'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('index', { files_customer, file_work } ));

// db connection using "promise"
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

app.listen(conf.PORT,()=> {
    console.log(`App listening on port ${conf.PORT}`);
});