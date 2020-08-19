const mongoose = require('mongoose');

//Building schema for users
const namespacesSchema = new mongoose.Schema({
    planta : {
        type : String,
        required : true
    },
    linea : {
        type : String,
        required : true
    },
    equipo : {
        type : String,
        required : true
    },
    status : {
        type : Boolean,
        default : true
    }
});
 
//Setting collection name and model
const namespacesModel = mongoose.model('Namespaces', namespacesSchema, 'namespaces');

module.exports = namespacesModel;
