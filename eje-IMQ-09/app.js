const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo de los Servidores Web");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto http://localhost:${port}`);
})
        

//app.get obtener un recurso
//app.post crear un recurso
//app.put actualizar un recurso
//app.delete eliminar un recurso