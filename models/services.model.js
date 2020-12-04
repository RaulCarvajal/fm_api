const mongoose = require('mongoose');

//Building schema for services
const servicesSchema = new mongoose.Schema({
    type : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    start : {
        type :  String
    },
    finish : {
        type :  String
    },
    hours : {
        type : Number
    },
    status : {
        type :  Number, 
        required : true
    },
    client : {
        type :  mongoose.Schema.Types.ObjectId
    },
    tecnico : {
        type :  mongoose.Schema.Types.ObjectId
    },
    emg : {
        type :  mongoose.Schema.Types.ObjectId,
        require : true
    },
    service_details : {
        tipo_sensor : {
            type : String
        },
        tipo_controlador : {
            type : String
        },
        programa : {
            type : String
        }
    },
    observ : {
        trabajo_realizado : {
            type : String,
            default : ""
        },
        comentarios : {
            type : String,
            default : ""
        },
        recomendaciones : {
            default : "",
            type : String
        }
    },
    signature : { 
        data: Buffer, 
        contentType: String 
    },
    score : { 
        type : Number
    },
    requested_by : {
        type :  mongoose.Schema.Types.ObjectId
    },
    agreement : {
        type : mongoose.Schema.Types.ObjectId,
        require : true
    },
    payment :  {
        divisa : {
            type : String
        },
        total : {
            type : Number
        }
    },
    conceptos : [
        {
            codigo : {
                type : String
            },
            descripcion : {
                type : String
            },
            horas : {
                type : Number
            },
            precio : {
                type : Number
            },
            subtotal : {
                type : Number
            }
        }
    ],
    autorized_by : {
        type :  mongoose.Schema.Types.ObjectId
    },
    enlaces : {
        type : String
    },
    imgs : [
        {
            required : false,
            type : String
        }
    ],
    clientAdmin : {
        type :  mongoose.Schema.Types.ObjectId
    }
});

//Setting collection name and model
const servicesModel = mongoose.model('Services', servicesSchema, 'services');

module.exports = servicesModel;