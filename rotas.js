import Express from "express";

let rotas = Express.Router();

rotas.get("/inicio", (req, res) => {
  res.send("bem vindo ao inicio");
});

rotas.post("/cadastro", (req, res) => {
  res.send("");
});

rotas.get("/users", (req, res) => {
  res.send("bem vindo a tela de usuarios");
});

export default rotas;
