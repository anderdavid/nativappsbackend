const pool = require('../db/database')

exports.view =(req,res)=>{
    let query ="SELECT c.*,count(ce.estudiante_id) as num_estudiantes FROM curso_estudiante ce RIGHT JOIN cursos c ON c.id =ce.curso_id GROUP BY (c.id)"
    
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
        
        if(result.length>0){

            let cursos = result

            cursos.forEach(element => {
                element.fecha_inicio=formatDate(element.fecha_inicio)
                element.fecha_fin=formatDate(element.fecha_fin)
            });

            response ={
                status:true,
                cursos:cursos,
            }
        }else{
            response ={
                status:false,
                msg:'no hay cursos',
                cursos:result,
            }
        }
            
        res.send(JSON.stringify(response))
    })
}

exports.viewId=(req,res)=>{
    var id = req.params.id

    let query ="SELECT *FROM cursos WHERE id ="+id

    pool.query(query,(err,result,fields)=>{
        if(err) throw err
        
        if(result.length>0){
            let cursos = result

            cursos.forEach(element => {
                element.fecha_inicio=formatDate(element.fecha_inicio)
                element.fecha_fin=formatDate(element.fecha_fin)
            });
            
            response ={
                status:true,
                curso:cursos,
            }
        }else{
            response ={
                status:false,
                msg:'curso no encontrado',
                curso:result,
            }
        }
            
        res.send(JSON.stringify(response))
    })
}
exports.create =(req,res)=>{
    

    let nombre_curso = req.body.nombre_curso
    let horario= req.body.horario
    let fecha_inicio = req.body.fecha_inicio
    let fecha_fin = req.body.fecha_fin
    

    console.log('fecha: '+fecha_inicio)

    let query ="INSERT INTO cursos VALUES(id,'"+nombre_curso+"','"+horario+"','"+fecha_inicio+"','"+fecha_fin+"')"
    
    console.log('query '+query)
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
            var response ={
                status:true,
                msg:'curso creado'
            }
            res.send(JSON.stringify(response))
    })
}
exports.update =(req,res)=>{
    var id = req.params.id
    
    let nombre_curso = req.body.nombre_curso
    let horario= req.body.horario
    let fecha_inicio = req.body.fecha_inicio
    let fecha_fin = req.body.fecha_fin
    let numero_estudiantes= req.body.numero_estudiantes

    let query ="UPDATE cursos SET nombre_curso='"+nombre_curso+"',horario='"+horario+"',fecha_inicio='"+fecha_inicio+"',fecha_fin='"+fecha_fin+" WHERE id ="+id
    
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
            var response ={
                status:true,
                msg:'curso actualizado'
            }
            res.send(JSON.stringify(response))
    })
}
exports.delete =(req,res)=>{
    var id = req.params.id
    let query ="DELETE FROM cursos WHERE id ="+id
    pool.query(query,(err,result,fields)=>{
        if(err) throw err
         var response ={
            status:true,
            msg:'curso eliminado'
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