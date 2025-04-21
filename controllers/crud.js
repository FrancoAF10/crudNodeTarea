const conexion=require('../database/db');

exports.save=(req,res)=>{
    const titulo=req.body.titulo;
    const autor=req.body.autor;
    const genero=req.body.genero;
    const fechaPublicacion=req.body.fechaPublicacion;
    const isbn=req.body.isbn;
    const disponible=req.body.disponible;

    conexion.query('INSERT INTO LIBRO SET?',{titulo:titulo,autor:autor,genero:genero,fechaPublicacion:fechaPublicacion,isbn:isbn,disponible:disponible},(error,results)=>
    {
        if(error){
            console.log(error);
        }else{
            console.log('grabado correctamente');
            res.redirect('/');
        }
    }); 
}
exports.delete=(req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM LIBRO WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Libro eliminado correctamente');
            res.redirect('/');
        }
    });
}
exports.update = (req, res) => {
    const id = req.body.id;
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const genero = req.body.genero;
    const fechaPublicacion = req.body.fechaPublicacion;
    const isbn = req.body.isbn;
    const disponible = req.body.disponible;

    conexion.query('UPDATE LIBRO SET ? WHERE id = ?', 
    [{ titulo, autor, genero, fechaPublicacion, isbn, disponible }, id], 
    (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Libro actualizado correctamente');
            res.redirect('/');
        }
    });
};
