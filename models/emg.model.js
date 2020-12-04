const mongoose = require('mongoose');

//Building schema for EMG Machine
const emgSchema = new mongoose.Schema({
    qr : { 
        data: Buffer, 
        contentType: String 
    }, 
    info : {
        name : { type: String },
        type : { type: String },
        model : { type: String, require : true },
        description : { type : String },
        serial: {type : String }
    },
    client : {
        type :  mongoose.Schema.Types.ObjectId,
        require : true
    },
    plant : {
        type :  mongoose.Schema.Types.ObjectId,
        require : true
    },
    line : {
        type :  mongoose.Schema.Types.ObjectId,
        require : true
    },
    cod_pro : {
        type :  String,
        require : true
    },
    status:{
        type : Number,
        default : 0
    },
    active : {
        type : Boolean,
        required : true,
        default : true
    },
    meta : {
        registred_by : {
            type :  mongoose.Schema.Types.ObjectId,
            require : true
        },
        registred_date : {
            type : Date,
            default : Date.now
        }
    },
    enlaces : {
        type : String,
        required : false
    },
    extras : {
        type : String,
        required : false
    },
    img : {
        required : false,
        type : String
    },
    clientAdmin : {
        type :  mongoose.Schema.Types.ObjectId
    }
});

//Setting collection name and model
const emgModel = mongoose.model('Emg', emgSchema, 'emgs');

module.exports = emgModel;
