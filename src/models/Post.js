const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postShema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    khoan: {type: String, enum : ['Chi','Thu'], default: 'Chi'},
    date: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('post', postShema);