const mongoose = require('mongoose');

//Building schema for users
const client_adminSchema = new mongoose.Schema({
    username : {
        type : String,
        required :true
    },
    password : {
        type : String,
        required :true
    },
    info : {
        name : {
            type : String,
            required :true
        },
        email : {
            type : String,
            match :  /.+@.+\..+/,
            lowercase : true
        },
        code : { 
            type : String,
        }
    },
    cliente : {
        type :  mongoose.Schema.Types.ObjectId,
        required : false
    },
    active : {
        type : Boolean,
        required : true,
        default : false
    },
    meta : {
        registred_date : {
            type : Date, 
            required : true,
            default : Date.now
        }
    }
});
 
//Setting collection name and model
const client_adminModel = mongoose.model('Client_admin', client_adminSchema, 'client_admin');

module.exports = client_adminModel;