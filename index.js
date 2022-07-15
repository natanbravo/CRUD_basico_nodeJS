// Aqui criei um CRUD com NodeJS;
// Implementei rotas de requisições e criamos um servidor;
// Você pode testar todas as rotas no Insomnia;

//======================================================================================================================================

// Criando servidor

const express = require("express");

const server = express();

//======================================//

//Essa função manda uma requisição para o servidor dizendo que vai ser enviado um JSON, para fazer um POST;

server.use(express.json());

//======================================//

// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request Body = { nome: 'NodeJs', tipo: 'Backend' }

// Criamos um array de dados inicial;

const cursos = ["NodeJs", "JavaScript", "React Native"];

//======================================//

// Vamos iniciar o CRUD = CREATE - READ - UPDATE - DELETE

// Essa requisição chama todos os cursos do servidor;
// READ;

server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

//======================================//

// Essa requisição manda dados para o servidor;
// Do tipo POST;
// CREATE;

server.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);
  return res.json(cursos);
});

//======================================//

//Atualizando um curso;
// Utilizando o método PUT;
// Requisição do tipo UPDATE;

server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;
  return res.json(cursos);
});

//======================================//

//Deletando um curso;
//Utilizando o método DELETE;
//Requisição do tipo DELETE;

server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;
  cursos.splice(index, 1);
  return res.json({ message: "Curso deletado com sucesso" });
});

//======================================//

// Isso retorna um curso de cada vez ao informar o ID
//EX:  localhost:3000/cursos/1

//Lendo um curso;
//Utilizando o método GET;
//Requisição do tipo READ;

server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

//======================================================//


// Chamando o servidor na porta 3000;
//localhost:3000/cursos

server.listen(3000);
