require("dotenv").config();

const express = require("express");
const app = express();

const db = require("./db")

app.use(express.json());

app.delete("/produto/:id",(request, response)=>{
    const id = request.params.id;
    db.removeProduto(id);
    response.sendStatus(204);
});

app.patch("/produto/:id",(request, response)=>{
    const id = request.params.id;
    const dadosproduto = request.body;

    db.alteraProduto(id, dadosproduto);
    response.sendStatus(200);
});

//rota
app.get("/produto/:id", (request, response) => {
    const id = request.params.id;
    response.json(db.listaProduto(id))
});

app.get("/produto", (request, response) => {
    response.json(db.retornarProduto())
});

app.post("/produto", (request, response)=> {
    const produto = request.body;
    db.inserirProduto(produto);
    response.sendStatus(201);
})

app.get("/", (request, response) => {
    response.json({
        message: "oi blz, vc acessou a rota"
    })
} );

app.listen(process.env.PORT, () => {

    console.log("Oi está  no ar");
});

