const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserShema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    post: [
        {
            title:{type:String, required:true},
            khoan: {type: String, enum : ['Chi','Thu'], default: 'Chi'},
            money:{type:String, required: true},
            dateUser: {type: String, require: true},
            date: {type: Date, default: Date.now()}

        }
    ]
}, {timestamps: true});

module.exports = mongoose.model('user', UserShema);