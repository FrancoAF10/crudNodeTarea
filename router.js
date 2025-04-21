const express=require('express');

const router=express.Router();
const conexion=require('./database/db')

router.get('/',(req,res)=>{
    conexion.query("SELECT * FROM vista_libros",(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{registros:results});
        }
    });
});
router.get('/create',(req,res)=>{
    res.render("create");
})
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM LIBRO WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.render('edit', { libro: results[0] });
        }
    });
});

const crud=require('./controllers/crud');
router.post('/save',crud.save);
router.get('/delete/:id', crud.delete);
router.post('/update', crud.update);

module.exports=router;