const mongoose = require('mongoose');
const _ = require('underscore');
const servername = "localhost";

module.exports = (wagner) => {
    //Conexión a la base de datos
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://${servername}:27017/emg`, { useNewUrlParser: true });

    wagner.factory('db', ()=> mongoose);

    const Emg = require('./emg.model');
    const Plant = require('./plants.model');
    const Service = require('./services.model');
    const User = require('./users.model');
    const Config = require('./config_fecha.model');
    const Tipos = require('./services_types.model');
    const Agreement = require('./agreements.model');
    const Clients = require('./empresa_cliente.model');
    const Iva = require('./iva.model');
    const Unitprice = require('./unit_price.model');
    const Models = require('./models.model');
    const Namespaces = require('./namespaces.model');
    const Client_admin = require('./client_admin.model');

    const models = {
        User,
        Emg,
        Plant,
        Service,
        Config,
        Tipos,
        Agreement,
        Clients,
        Iva,
        Unitprice,
        Models,
        Namespaces,
        Client_admin
    }
    _.each(models, (v, k)=> {
        wagner.factory(k, ()=>v);
    });
}