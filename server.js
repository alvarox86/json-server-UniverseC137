try {
    process.loadEnvFile()
} catch (error) {
    console.warn("env no encontrado usando variables predeterminadas")
}

const jsonServer = require("json-server")

//creamos el servidor
const server = jsonServer.create()

//aqui se añaden las configuraciones basicas de un servidor
const middlewares = jsonServer.defaults()
server.use(middlewares)

//aqui se añaden todas las rutas basicas de CRUD de la data y gestiona la base de datos en el archivo db.json
const routes = jsonServer.router("db.json")
server.use(routes)

const PORT = process.env.PORT || 5005

server.listen(PORT, () => {
    console.log(`JSON server en ${PORT}`)
    console.log(`acceso local en http://localhost:${PORT}`)
})