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

module.exports = control