const db = require('../config/dbconfig');
const pg = require('pg');

const client = new pg.Client(db.url);

let control = [];

client.connect();

control.trabajadoresNomId = async(req,res)=>{
    let trabajadores= []
    try{
        
        let cons = await client.query("select * from usp_listar_trabajadores()");
        cons.rows.forEach(row=>{
            trabajadores.push(row)
        });
        res.status(200).send(trabajadores)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.trabajadoresLista = async(req,res)=>{
    let trabajadores= []
    try{
        
        let cons = await client.query("select * from usp_listar_trabajadores_todos()");
        cons.rows.forEach(row=>{
            trabajadores.push(row)
        });
        res.status(200).send(trabajadores)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.trabajador= async(req,res)=>{
    let trabajador = {}
    try{
        let cons = await client.query("SELECT * FROM tb_trabajadores where cod_trabajador=$1",[+req.params.id]);
        cons.rows.forEach(row=>{
            trabajador = row;
        });
        res.status(200).send(trabajador)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.agregarTrabajador = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_create_trabajador ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
                [req.body.tipo_doc, req.body.tipo_cont, req.body.doc, req.body.fecnac, req.body.ape_pat,
                req.body.ape_mat, req.body.primer_nombre, req.body.segundo_nombre, req.body.direccion,
                req.body.telefono, req.body.mail, req.body.cargo])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.actualizarTrabajador = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_actualizar_trabajador($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
        [req.body.id, req.body.tipo_doc, req.body.tipo_cont, req.body.doc, req.body.fecnac, req.body.ape_pat,
        req.body.ape_mat, req.body.primer_nombre, req.body.segundo_nombre, req.body.direccion,
        req.body.telefono, req.body.mail, req.body.cargo])    
    
        res.status(200).send({Msg:'Actualización exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.eliminarTrabajador = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_eliminar_trabajador($1)',[req.params.id])
        res.status(200).send({Msg:'Eliminación exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}
//await client.end();
module.exports = control