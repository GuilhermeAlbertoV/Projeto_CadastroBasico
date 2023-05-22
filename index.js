import Express from "express";
let server = Express();
let port = 8080;
class App {
  constructor() {}
}

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
