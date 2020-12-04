const client_adminRouter =  require('express').Router();

module.exports = (wagner) => { 

    const client_adminCtrl = wagner.invoke((Client_admin)=>require('../controllers/models.controller')(Client_admin));
    
    return client_adminRouter;
}