const express = require('express');
const router = express.Router();
const jsonParser = express.json();

const model = require('../models');

router.get('/post', (req, res)=>{
   model.Post.find({},(err, posts)=>{
       if(err) console.log(err);
       res.send(posts);
   })
});

module.exports = router;