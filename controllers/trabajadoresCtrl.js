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

control.empresa = async(req,res)=>{
    let empresa = {}
    try{
        let cons = await client.query("SELECT * FROM tb_empresa_cli where cod_emp_cli=$1",[req.params.id]);
        cons.rows.forEach(row=>{
            console.log(row);
            empresa = row;
        });
        res.status(200).send(empresa)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.agregarEmpresa = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_create_empresa_cli($1, $2, $3, $4)',[req.body.pais, req.body.ruc, req.body.raz, req.body.contribuyente])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.actualizarEmpresa = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_actualizar_empresa_cli($1, $2, $3, $4, $5)',[req.body.id, req.body.pais, req.body.ruc, req.body.raz, req.body.contribuyente])
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