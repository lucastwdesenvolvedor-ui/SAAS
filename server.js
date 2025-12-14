import express from 'express';
import path from 'path';
import dotenv from "dotenv";



dotenv.config();

const app = express();
const port = 5500;


let produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 200 }
];


app.use(express.json());
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});
app.get("/api/produtos", (req, res) => {
  res.json(produtos);
});
app.get('/i', (req, res) => {
    res.sendFile(path.resolve('intro.html'))
}); 

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('cadastro/login.html'))
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve('cadastro/registro.html'))
});
console.log(`Server running at http://localhost:${port}/`);
app.listen(port);


