const db = require('../config/dbconfig');
const pg = require('pg');

const client = new pg.Client(db.url);

let control = [];

client.connect();

control.lista = async(req,res)=>{
    let ordenes = []
    try{
        
        let cons = await client.query("select * from usp_listar_ordenes()");
        cons.rows.forEach(row=>{
            ordenes.push(row)
        });
        res.status(200).send(ordenes)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.origenes = async(req,res)=>{
    let origenes = []
    try{
        
        let cons = await client.query("select * from usp_ver_origenes($1)",[req.params.id]);
        cons.rows.forEach(row=>{
            origenes.push(row)
        });
        res.status(200).send(origenes)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.orden = async(req,res)=>{
    let orden = {}
    try{
        let cons = await client.query("select * from usp_ver_orden($1)",[req.params.id]);
        cons.rows.forEach(row=>{
            console.log(row);
            orden = row;
        });
        res.status(200).send(orden)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.ultimaOrden = async(req,res)=>{
    let nro = {}
    try{
        let cons = await client.query("SELECT * FROM usp_ultima_orden()");
        cons.rows.forEach(row=>{
            console.log(row);
            nro = row;
        });
        res.status(200).send(nro)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.agregarOrden = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_create_orden($1, $2, $3, $4)',[req.body.responsable, req.body.fecha, req.body.referencia, req.body.cliente])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.agregarOrigen = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_origen_orden($1, $2, $3, $4)',[req.body.orden, req.body.nombre, req.body.descripcion, req.body.contacto])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.actualizarOrden = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_actualizar_orden_cli($1, $2, $3, $4, $5)',[req.body.id, req.body.pais, req.body.ruc, req.body.raz, req.body.contribuyente])
        res.status(200).send({Msg:'Actualización exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.eliminarOrden = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_eliminar_orden_cli($1)',[req.params.id])
        res.status(200).send({Msg:'Eliminación exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.agregarActividad = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_insert_actividad($1, $2, $3, $4, $5, $6)',[req.body.origen, req.body.descripcion, req.body.trabajo, req.body.producto, req.body.horas, req.body.minutos])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.agregarActividadTrabajador = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_insert_trabajador_actividad($1, $2, $3, $4, $5, $6)',[req.body.actividad, req.body.trabajador, req.body.especialidad, req.body.categoria, req.body.horas, req.body.minutos])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}
//await client.end();
module.exports = control