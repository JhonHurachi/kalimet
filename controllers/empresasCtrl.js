const db = require('../config/dbconfig');
const pg = require('pg');

const client = new pg.Client(db.url);

let control = [];

client.connect();

control.lista = async(req,res)=>{
    let empresas = []
    try{
        
        let cons = await client.query("select * from usp_listar_empresa_cli()");
        cons.rows.forEach(row=>{
            empresas.push(row)
        });
        res.status(200).send(empresas)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.empresa = async(req,res)=>{
    let empresa = {}
    try{
        let cons = await client.query("SELECT * FROM empresa_cli where cod_emp_cli=$1",[req.params.id]);
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
        let con = await client.query('select * from usp_create_empresa_cli($1, $2, $3)',[req.body.pais, req.body.ruc, req.body.raz])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.actualizarEmpresa = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_actualizar_empresa_cli($1, $2, $3)',[req.body.pais, req.body.ruc, req.body.raz])
        res.status(200).send({Msg:'Actualización exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.eliminarEmpresa = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_eliminar_empresa_cli($1)',[req.params.id])
        res.status(200).send({Msg:'Eliminación exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}
//await client.end();
module.exports = control