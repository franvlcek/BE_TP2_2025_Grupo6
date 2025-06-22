# BE_TP2_2025_Grupo6
Proyecto API RESTful creado utilizando Node, Express y Sequelize, siguiendo el patrón MVC
Base de datos creada en XAMP, utilizando dialecto MySQL.
Pasos a seguir una vez clonado el repositorio:
1. Estando sobre el proyecto, ejecutar el comando npm install en la terminal, para instalar las dependencias del proyecto
2. Siguiendo el ejemplo provisto por el archivo .env.example, crear un archivo .env
3. Encender la base de datos
4. Ejecutar el comando npm start (para "producción") o npm run dev (para desarrollo)

Modelos:
1. User
2. Role
3. Console
4. Genre
5. Game
6. Comment

Rutas:

1. GET "/" -> Obtener todas las instancias del modelo
2. GET "user/me" -> Obtener datos del usuario logueado actualmente
3. GET "/:id" -> Obtener un objeto especifico
4. POST "/" -> Crear 
5. POST "/user/login" -> Loguearse con la info de un usuario 
6. POST "/user/logout" -> Borrar las cookies de login de la sesion actual
7. PUT "/:id" -> Modificar un objeto
8. DELETE "/:id" -> Eliminar un objeto

Endpoints:
1. localhost:8080/user/
2. localhost:8080/role/
3. localhost:8080/console/
4. localhost:8080/genre/
5. localhost:8080/game/
6. localhost:8080/comment/