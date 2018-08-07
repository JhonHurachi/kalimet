const db = require('../config/dbconfig');
const pg = require('pg');

const client = new pg.Client(db.url);

let control = [];

client.connect();

control.paises = async(req,res)=>{
    let paises = []
    try{
        
        let cons = await client.query("select * from usp_listar_paises()");
        cons.rows.forEach(row=>{
            paises.push(row)
        });
        res.status(200).send(paises)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.contribuyentes = async(req,res)=>{
    let contribuyentes = []
    try{
        
        let cons = await client.query("select * from usp_listar_tipo_contribuyentes()");
        cons.rows.forEach(row=>{
            contribuyentes.push(row)
        });
        res.status(200).send(contribuyentes)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.tiposDoc = async(req,res)=>{
    let tipos = []
    try{
        
        let cons = await client.query("select * from usp_listar_tiposdoc()");
        cons.rows.forEach(row=>{
            tipos.push(row)
        });
        res.status(200).send(tipos)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.cargos = async(req,res)=>{
    let cargos = []
    try{
        
        let cons = await client.query("select * from usp_listar_cargosPersonal()");
        cons.rows.forEach(row=>{
            cargos.push(row)
        });
        res.status(200).send(cargos)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.contactos = async(req,res)=>{
    let contactos = []
    try{
        
        let cons = await client.query("select * from usp_listar_contactos()");
        cons.rows.forEach(row=>{
            contactos.push(row)
        });
        res.status(200).send(contactos)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.trabajos= async(req,res)=>{
    let trabajos = []
    try{
        
        let cons = await client.query("select * from usp_listar_trabajos()");
        cons.rows.forEach(row=>{
            trabajos.push(row)
        });
        res.status(200).send(trabajos)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.productos= async(req,res)=>{
    let productos = []
    try{
        
        let cons = await client.query("select * from usp_listar_productos()");
        cons.rows.forEach(row=>{
            productos.push(row)
        }); 
        res.status(200).send(productos)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.habilidades= async(req,res)=>{
    let habilidades = []
    try{
        
        let cons = await client.query("select * from usp_listar_habilidades()");
        cons.rows.forEach(row=>{
            habilidades.push(row)
        }); 
        res.status(200).send(habilidades)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.activs = async(req,res)=>{
    let activs = []
    try{
        
        let cons = await client.query("select * from usp_listar_act()");
        cons.rows.forEach(row=>{
            activs.push(row)
        });
        res.status(200).send(activs)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.agregarActiv = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_create_act ($1)',[req.body.activ])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.eliminarActiv = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_delete_act($1)',[req.params.id])
        res.status(200).send({Msg:'Eliminación exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.actualizarActiv = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_update_act($1,$2)',[req.body.id,req.body.activ])
        res.status(200).send({Msg:'Actualización exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.activ= async(req,res)=>{
    let activ = {}
    try{
        let cons = await client.query("SELECT * FROM usp_ver_act($1)",[+req.params.id]);
        cons.rows.forEach(row=>{
            activ = row;
        });
        res.status(200).send(activ)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

module.exports = control