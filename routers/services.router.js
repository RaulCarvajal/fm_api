const serviceRouter = require('express').Router();

module.exports = (wagner) => {
    
    const serviceCtrl = wagner.invoke((Service) => require('../controllers/services.controller')(Service));

    //Todos los servicios
    serviceRouter.get("/getall",(req,res)=>{
        serviceCtrl.getAll(req,res);
    });
    //Servicios por cliente
    serviceRouter.get("/getbyclient/:idclient",(req,res)=>{
        serviceCtrl.getByClient(req,res); 
    });
    //Servicios por tecnico
    serviceRouter.get("/getbytec/:idtec",(req,res)=>{
        serviceCtrl.getByTec(req,res); 
    });
    //Servicios por emg
    serviceRouter.get("/getbyemg/:idemg",(req,res)=>{
        serviceCtrl.getByEmg(req,res); 
    });
    //Servicio por id
    serviceRouter.get("/getbyid/:id",(req,res)=>{
        serviceCtrl.getById(req,res); 
    });
    //Nuevo servicio
    serviceRouter.post("/create",(req,res)=>{//ok!
        serviceCtrl.newServ(req,res);
    });
    //Asignar tecnico
    serviceRouter.patch("/asigtec/:id_s/:id_t",(req,res)=>{//ok!!
        serviceCtrl.asigtecServicio(req,res);
    });
    //Iniciar servicio
    serviceRouter.put("/start/:id",(req,res)=>{//ok!!
        serviceCtrl.iniciarServicio(req,res);
    });
    //Finalizar servicio
    serviceRouter.put("/finish/:id",(req,res)=>{//ok!!
        serviceCtrl.finalizarServicio(req,res);
    });
    //Servicio Solicitado Email
    serviceRouter.post("/emailsolicitarservicio",(req,res)=>{//ok!
        serviceCtrl.emailSolicitarServicio(req,res);
    });
    //Programar servicio Email
    serviceRouter.post("/emailprogramarservicio",(req,res)=>{//ok!
        serviceCtrl.emailProgramarServicio(req,res);
    });
    //Asignado Tec Email
    serviceRouter.post("/emailasignarservicio",(req,res)=>{//ok!
        serviceCtrl.emailAsigTecServicio(req,res);
    });

    serviceRouter.get("/bycontrato/:id",(req,res)=>{//ok!
        serviceCtrl.getByAgreement(req,res);
    });
    //autorizarServicio
    serviceRouter.put("/auth/:id",(req,res)=>{//ok!
        serviceCtrl.autorizarServicio(req,res);
    });

    return serviceRouter;
}