const configsRouter =  require('express').Router();

module.exports = (wagner) => { 

    const ivaCntrlr = wagner.invoke((Iva)=>require('../controllers/iva.controller')(Iva));

    //setFech 
    configsRouter.post("/saveiva",(req,res)=>{
        ivaCntrlr.saveIva(req,res);
    });
    //getFecAnt
    configsRouter.get("/getiva/:aid",(req,res)=>{
        ivaCntrlr.getUltIva(req,res);
    });

    return configsRouter;
}