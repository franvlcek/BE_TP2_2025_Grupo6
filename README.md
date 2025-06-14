# BE_TP2_2025_Grupo6
Proyecto API RESTful creado utilizando Node, Express y Sequelize, siguiendo el patrón MVC
Base de datos creada en XAMP, utilizando dialecto MySQL.
Pasos a seguir una vez clonado el repositorio:
1. Estando sobre el proyecto, ejecutar el comando npm install en la terminal, para instalar las dependencias del proyecto
2. Siguiendo el ejemplo provisto por el archivo .env.example, crear un archivo .env
3. Encender la base de datos
4. Ejecutar el comando npm start (para "producción") o npm run dev (para desarrollo)

Modelos:
User
Role
Console
Genre
Game

Rutas:
localhost:8080/user/
localhost:8080/role/
localhost:8080/console/
localhost:8080/genre/
localhost:8080/game/

GET "/" -> Obtener todas las instancias del modelo
GET "/:id" -> Obtener un objeto especifico
POST "/" -> Crear 
PUT "/:id" -> Modificar un objeto
DELETE "/:id" -> Eliminar un objeto