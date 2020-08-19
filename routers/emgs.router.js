const emgsRouter =  require('express').Router();

module.exports = (wagner) => {
    const emgsCtrl = wagner.invoke((Emg)=>require('../controllers/emg.controller')(Emg))

    //Get todos
    emgsRouter.get("/getall",(req,res)=>{
        emgsCtrl.getAll(req,res);
    });
    //Get by id
    emgsRouter.get("/getbyid/:id",(req,res)=>{
        emgsCtrl.getById(req,res); 
    });

    emgsRouter.get("/getbyplantandline/:id_p/:id_l",(req,res)=>{
        emgsCtrl.getByPlantAndLine(req,res);
    });
    //Get by client
    emgsRouter.get("/getbyclient/:id",(req,res)=>{
        emgsCtrl.getByClient(req,res); 
    });
    //Get by plant
    emgsRouter.get("/getbyplant/:id",(req,res)=>{
        emgsCtrl.getByPlant(req,res); 
    });
    //Get by line
    emgsRouter.get("/getbyline/:id",(req,res)=>{
        emgsCtrl.getByLine(req,res); 
    });
    //New emg
    emgsRouter.post("/create",(req,res)=>{
        emgsCtrl.newEmg(req,res);
    })
    //New emg
    emgsRouter.put("/genqr/:id",(req,res)=>{
        emgsCtrl.genQrEmg(req,res);
    })
    //Disable
    emgsRouter.patch("/disable/:id",(req,res)=>{//ok!
        emgsCtrl.disable(req,res);
    });
    //Enable
    emgsRouter.patch("/enable/:id",(req,res)=>{//ok!!
        emgsCtrl.enable(req,res);
    });
    emgsRouter.put("/edit",(req, res) => {
        emgsCtrl.edit(req,res);
    });

    return emgsRouter;
}