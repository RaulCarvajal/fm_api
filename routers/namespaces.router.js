const namespacesRouter =  require('express').Router();

module.exports = (wagner) => { 

    const namespacesCntrl = wagner.invoke((Namespaces)=>require('../controllers/namespaces.controller')(Namespaces));

    //Add
    namespacesRouter.post("/add",(req,res)=>{
        namespacesCntrl.add(req,res);
    });
    
    //Get
    namespacesRouter.get("/get",(req,res)=>{
        namespacesCntrl.get(req,res);
    });

    //Update
    namespacesRouter.put("/update",(req,res)=>{
        namespacesCntrl.update(req,res);
    });

    return namespacesRouter;
}