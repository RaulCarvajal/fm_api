const mongoose = require('mongoose');

//Building schema for Configuration
const empresaCliente = new mongoose.Schema({
    name : {
        type :  String
    },
    description : {
        type : String
    },
    status : {
        type : Boolean,
        default : true
    },
    clientAdmin : {
        type :  mongoose.Schema.Types.ObjectId
    }
});

//Setting collection name and model
const empresaModel = mongoose.model('Client', empresaCliente, 'clients');

module.exports = empresaModel;