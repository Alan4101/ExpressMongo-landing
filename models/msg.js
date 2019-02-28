const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Msg = new schema(
    {
    name: String,
    email: String,
    title: String,
    comment: String
},
    { versionKey: false}
    );

module.exports = mongoose.model('Msg', Msg);
