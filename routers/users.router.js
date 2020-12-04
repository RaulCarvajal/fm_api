const userRouter = require('express').Router();

module.exports = (wagner) =>{

    const userCtrl = wagner.invoke((User)=>require('../controllers/users.controller')(User));
    
    //Create user
    userRouter.post("/create",(req,res)=>{//ok!
        userCtrl.newUser(req,res);
    });
    //Login
    userRouter.post("/login",(req,res)=>{//ok!
        userCtrl.login(req,res);
    });
    //Get all users
    userRouter.get("/getall/:aid",(req,res)=>{//ok!
        userCtrl.getAll(req,res);
    });
    //Get users Tecnicos
    userRouter.get("/gettec/:aid",(req,res)=>{//ok!
        userCtrl.getTec(req,res);
    });
    //Get users Clients
    userRouter.get("/getclients/:aid",(req,res)=>{//ok!
        userCtrl.getClients(req,res);
    });
    
    //Get users Clients names
    userRouter.get("/getclientsnames/:aid",(req,res)=>{//ok!
        userCtrl.getClientsNames(req,res);
    });

    //Get Admin
    userRouter.get("/getadmin/:aid",(req,res)=>{
        userCtrl.getAdmin(req,res);
    });

    //Get users by id
    userRouter.get("/getbyid/:id",(req,res)=>{//ok!
        userCtrl.getById(req,res); 
    });
    //Update
    userRouter.put("/update",(req,res)=>{//ok!
        userCtrl.updateu(req,res);
    });
    //Update pass
    userRouter.put("/updatepass",(req,res)=>{//ok!
        userCtrl.updatePass(req,res);
    });
    //Disable
    userRouter.patch("/disable/:id",(req,res)=>{//ok!
        userCtrl.disable(req,res);
    });
    //Enable
    userRouter.patch("/enable/:id",(req,res)=>{//ok!!
        userCtrl.enable(req,res);
    });
    //Permisos
    userRouter.patch("/modpermissions/:id",(req,res)=>{//ok!!
        userCtrl.modPermissions(req,res);
    });
    
    userRouter.get("/existe/:name",(req,res)=>{
        userCtrl.existe(req,res);
    });

    userRouter.get("/activar/:id",(req,res)=>{
        userCtrl.email_enable(req,res);
    });

    userRouter.post("/newUserEmail",(req,res)=>{
        userCtrl.emailNewUser(req,res);
    });

    return userRouter;
} 