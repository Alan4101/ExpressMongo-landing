const express = require('express');
const jsonParser = express.json();
const router = express.Router();

const model = require('../models');

router.post('/msg/', jsonParser,(req, res)=>{
    if(!req.body) return res.sendStatus(400);

    const name = req.body.name;
    const email = req.body.email;
    const title = req.body.title;
    const comment = req.body.txt_comment;

    const msg = new model.Msg({name: name, email: email, title: title, comment: comment});

    msg.save((err)=>{
        if(err) return console.log(err);
        res.send(msg);
        console.log(`send sucsess ${msg} `);
    })

});