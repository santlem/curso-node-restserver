const { response, request } = require('express');
 
const usuariosGet = (req = request, res = response) => {

    const {
        q,
        nombre,
        apiKey,
        page=1
    } = req.query;
    
    const query = req.query;

    res.json({
        msd: 'get API - controlador',
        ...query
    });
}

const usuariosPost = (req, res = response) => {

    const {
        nombre,
        edad
    } = req.body;

    res.json({
        msd: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msd: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {

    res.json({
        msd: 'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {

    res.json({
        msd: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}