const pool = require('../db/database')
const { json } = require('express')

exports.asignarCursos =(req,res)=>{
    
    let cursoId = req.body.cursoId
    let estudianteId =req.body.estudianteId
   

    let queryValidacion ="SELECT count(id) as numero FROM curso_estudiante WHERE estudiante_id="+estudianteId+" AND curso_id="+cursoId
    pool.query(queryValidacion,(err,result,fields)=>{
        if(err) throw err
        var validation=result[0].numero
        console.log(validation)

        if(validation==1){
            var response ={
                status:false,
                msg:'Asignacion ya existe'
            }
            res.send(JSON.stringify(response))
        }else{
            let query ="INSERT INTO curso_estudiante VALUES(id,"+cursoId+","+estudianteId+",now())"

            pool.query(query,(err,result,fields)=>{
                if(err) throw err
                var response ={
                    status:true,
                    msg:'curso asignado'
                }
                res.send(JSON.stringify(response))
            })
        }
    })
}

exports.estudianteCurso=(req,res)=>{
    var id = req.params.id
    let query ="SELECT e.nombre, c.nombre_curso FROM curso_estudiante ce INNER JOIN cursos c ON c.id =ce.curso_id INNER JOIN estudiantes e ON e.id = ce.estudiante_id WHERE ce.estudiante_id="+id

    pool.query(query,(err,result,fields)=>{
        if(err) throw err
        
        if(result.length>0){

            response ={
                status:true,
                estudianteCursos:result,
            }
        }else{
            response ={
                status:false,
                msg:'Estudiante no encontrado',
                estudianteCursos:result,
            }
        }
            
        res.send(JSON.stringify(response))
    })
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}