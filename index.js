const express = require('express')
const app = express()
const cors = require('cors')
 
const port = process.env.PORT||3002
app.use(cors())
app.use(express.json())

const estudianteController =require('./controllers/estudianteController')
const cursoController =require('./controllers/cursoController')
const funcionesController =require('./controllers/funcionesController')

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on ${port} port!`))


//estudiantes
app.get('/estudiantes',estudianteController.view)
app.get('/estudiantes/:id',estudianteController.viewId)
app.post('/estudiantes',estudianteController.create)
app.put('/estudiantes/:id',estudianteController.update)
app.delete('/estudiantes/:id',estudianteController.delete)

//cursos
app.get('/cursos',cursoController.view)
app.get('/cursos/:id',cursoController.viewId)
app.post('/cursos',cursoController.create)
app.put('/cursos/:id',cursoController.update)
app.delete('/cursos/:id',cursoController.delete)

//funciones
app.post('/asignacion',funcionesController.asignarCursos)


