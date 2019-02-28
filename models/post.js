const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Post = new schema({
    text: String,
    author: String
},
    { versionKey: false}
);

module.exports = mongoose.model('Post', Post);