import Express from "express";
import rotas from "./rotas.js";
let server = Express();
let port = 8080;
class App {
  constructor() {
    this.router();
  }

  router() {
    server.use("/inicio", rotas);
    server.use("/cadastro", rotas);
    server.use("/users", rotas);
  }
}

new App();

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
