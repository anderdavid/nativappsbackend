## Presentación prueba técnica NativApps REACT-NODE.JS

- Ver aplicación en servidor compartido (heroku):
	 Backend: https://nativeappsbackend.herokuapp.com/
   FrontEnd: https://nativappsfrontend.herokuapp.com/
    
        
- Credenciales de acceso a la base de datos (https://www.freemysqlhosting.net):
	- Servidor: sql10.freemysqlhosting.net
	- Nombre base de datos: sql10356362
	- Username: sql10356362
	- Password: sGNCHQAkQA
	- Port number: 3306
    
- INSTALACION<br>
Requerimientos:
    - node.js
    - Mysql
        
 - clonar de repositorio FrontEnd <br>
		Git clone https://github.com/anderdavid/nativappsfrontend.git<br>
		cd nativappsfrontend/<br>
		npm install<br>
    npm start
    
  - clonar de repositorio Backend <br>
    Git clone https://github.com/anderdavid/nativappsbackend.git<br>
    cd nativappsbackend/<br>
    npm install<br>
    npm run devStart
    
    
        
- configurar credenciales base de datos
		
	- /db/database.js
			
       const params ={ <br>
        host: (nombre servidor), <br>
        user:(username), <br>
        password:(password), <br>
        database:(nombre base de datos) <br>
    } <br>
    
- Ejecutar script mysql<br>
#CREAR BASES DE DATOS<br>

CREATE DATABASE asignacion;<br>
<br>
DROP TABLE curso_estudiante;<br>
DROP TABLE cursos;<br>
DROP TABLE estudiantes;<br>
<br>

CREATE TABLE estudiantes(<br>
id int8 NOT NULL PRIMARY KEY AUTO_INCREMENT,<br>
nombre VARCHAR(120) NOT NULL,<br>
apellido VARCHAR(120) NOT NULL,<br>
edad VARCHAR(120) NOT NULL,<br>
email VARCHAR(120) NOT NULL<br>
);<br>

CREATE TABLE cursos(<br>
id int8 NOT NULL PRIMARY KEY AUTO_INCREMENT,<br>
nombre_curso VARCHAR(120) NOT NULL,<br>
horario VARCHAR(120) NOT NULL,<br>
fecha_inicio DATE NOT NULL,<br>
fecha_fin DATE NOT NULL<br>
);<br>
<br>
CREATE TABLE curso_estudiante(<br>
id int8 NOT NULL PRIMARY KEY AUTO_INCREMENT,<br>
curso_id int8,<br>
estudiante_id int8,<br>
createAt datetime,<br>
FOREIGN KEY (estudiante_id) REFERENCES estudiantes (id) ON DELETE CASCADE,<br>
FOREIGN KEY (curso_id) REFERENCES cursos (id) ON DELETE CASCADE<br>
);

DESCRIBE cursos;<br>
DESCRIBE estudiantes;<br>
DESCRIBE curso_estudiante;<br>
