const pool = require('../db/database')
exports.asignarCursos =(req,res)=>{
    
    let cursoId = req.body.cursoId
    let estudianteId =req.body.estudianteId

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