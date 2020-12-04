let _tipos

//getTypes
const getTypes = (req, res) => {
    let aid = req.params.aid;
    _tipos.find({ status : true, clientAdmin : aid })
        .then(types => {
            res.status(200);
            res.json({
                code: 200,
                detail: types
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                detail: error
            });
        });
}
//saveType
const saveType = (req, res) => {
    let n_type = req.body;
    _tipos.create(n_type)
        .then(data => {
            console.log(data);
            res.status(200);
            res.json({
                code: 200,
                detail: data
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                detail: error
            });
        });
};
//delType
const delType = (req, res) => {
    const id = req.params.id;
    _tipos.update(
            { _id : id },
            {$set : { status : false}}
        ).then(data =>{
            console.log(data);
            res.status(200);
            res.json({
                code: 200,
                detail: data
            });
        })
        .catch(error =>{
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                detail: error
            });
        });    
};
const actType = (req, res) => {
    const name = req.params.name;
    _tipos.update(
            { name : name },
            {$set : { status : true}}
        ).then(data =>{
            console.log(data);
            res.status(200);
            res.json({
                code: 200,
                detail: data
            });
        })
        .catch(error =>{
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                detail: error
            });
        });    
};
const existeType = (req, res) => {
    const name = req.params.name;
    _tipos.find(
            { name : name }
        ).then(data =>{
            console.log(data);
            res.status(200);
            res.json({
                code: 200,
                detail: data
            });
        })
        .catch(error =>{
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                detail: error
            });
        });    
};
module.exports = (Tipos) => {
    _tipos = Tipos;
    return ({
        saveType, getTypes, delType, actType, existeType
    })
}