let _namespaces

//Save
const add = (req, res) => {
    const model = req.body;
    _namespaces.create(model)
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
//Get last
const get = (req, res) => {
    let aid = req.params.aid;
    _namespaces.findOne({ status : true, clientAdmin : aid })
        .then(namespace => {
            res.status(200);
            res.json({
                code: 200,
                detail: namespace
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
//Update
const update = (req, res) => {
    _namespaces.updateOne({ _id : req.body._id },
            {
                planta : req.body.planta,
                linea : req.body.linea,
                equipo : req.body.equipo
            }
        )
        .then(data => {
            res.status(200);
            res.json({
                code: 200,
                detail: data
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

module.exports = (Namespaces) => {
    _namespaces = Namespaces;
    return ({
        add, get, update
    })
}