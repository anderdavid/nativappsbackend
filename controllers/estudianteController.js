const pool = require('../db/database') 

exports.view =(req,res)=>{
    let query ="SELECT *FROM estudiantes"

    pool.query(query,(err,result,fields)=>{
        if(err) throw err

        if(result.length>0){
            response ={
                status:true,
                estudiantes:result
            }
        }else{
            response={
                status:false,
                msg:'No hay estudiantes',
                estudiantes:result
            }
        }
        res.send(JSON.stringify(response))
    })
}

exports.viewId=(req,res)=>{
   
    var id = req.params.id

    let query ="SELECT *FROM estudiantes WHERE id ="+id

    pool.query(query,(err,result,fields)=>{
        if(err) throw err
        
        if(result.length>0){
            response ={
                status:true,
                estudiante:result,
            }
        }else{
            response ={
                status:false,
                msg:'Estudiante no encontrado',
                estudiante:result,
            }
        }
            
        res.send(JSON.stringify(response))
    })
}

exports.create=(req,res)=>{
   
    let nombre = req.body.nombre
    let apellido= req.body.apellido
    let edad = req.body.edad
    let email = req.body.email

    let query ="INSERT INTO estudiantes VALUES(id,'"+nombre+"','"+apellido+"','"+edad+"','"+email+"')"
    
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
         var response ={
            status:true,
            msg:'Estudiante creado'
        }
        res.send(JSON.stringify(response))
    })
    
}

exports.update =(req,res)=>{
    var id = req.params.id

    let nombre = req.body.nombre
    let apellido= req.body.apellido
    let edad = req.body.edad
    let email = req.body.email

    let query =" UPDATE estudiantes  SET nombre ='"+nombre+"',apellido='"+apellido+"',edad='"+edad+"',email='"+email+"' WHERE id ="+id
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
         var response ={
            status:true,
            msg:'Estudiante actualizado'
        }
        res.send(JSON.stringify(response))
    })
}

exports.delete=(req,res)=>{
    var id = req.params.id
    let query ="DELETE FROM estudiantes WHERE id ="+id
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
         var response ={
            status:true,
            msg:'Estudiante eliminado'
        }
        res.send(JSON.stringify(response))
    })
}