const mysql=require('mysql');
const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'BIBLIOTECA'
});

conexion.connect((error)=>{
    if(error){
        console.error(`Error en la conexión:${error}`);
        return;
    }
    console.log(`conectado correctamente al servidor`)
});
module.exports=conexion;