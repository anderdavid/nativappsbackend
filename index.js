const express = require('express')
const app = express()
const pool = require('../db/database')  
const { response } = require('express')

const port = process.env.PORT||3002

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))

app.get('/estudiantes',(req,res)=>{
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
    })
})