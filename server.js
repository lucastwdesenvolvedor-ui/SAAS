import express from 'express';
import path from 'path';
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 5500;

function checkDevKey(req, res, next) {
    const key = req.headers.authorization;

    if (!key) {
        return res.status(401).json({ error: "Chave não enviada." });
    }

    if (key !== process.env.DEV_KEY) {
        return res.status(403).json({ error: "Acesso negado." });
    }

    next();
}

// 🔐 Rota protegida — apenas dev com chave pode acessar
app.get("/api/dev/secret452t943t0243nt2p4t243n2c402t8746t30", checkDevKey, (req, res) => {
    res.json({ msg: "Acesso liberado apenas para DEV." });
    res.sendFile(path.resolve('inde.html'))
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))
}); 

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('cadastro/login.html'))
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve('cadastro/registro.html'))
});
console.log(`Server running at http://localhost:${port}/`);
app.listen(port);
