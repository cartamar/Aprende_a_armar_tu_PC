const express = require("express")
const app = express();

const port = 3000;

//Motor de pantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views")

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", {titulo: "Mi titulo dinamico"})//al utilizar render, el primer parametro es la pagina que se renderisara y el segundo es si se le quiere mandar alguna informacion por medio de un objeto
});

app.use((req,res,next) => {
    res.status(404).render("404", {titulo: "Ha surgido un herror"});
});

app.listen(port, () => {
    console.log("Escuchando al servidor", port);
});