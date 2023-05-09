// Importações
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
const db = require("./public/scripts/db.js");

// Porta
porta = 3000;

// Objeto para funcionalidades do Express
var app = express();

// Configuração BodyParser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


// Apontando para diretorio de arquivos estaticos
app.use('/public', express.static(path.join(__dirname, "public")));

// Rotas
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/Acqua', function (req, res) {
    db.selectCustomers(req.body.usuario, req.body.senha)
    .then(retorno => {
        console.log(retorno);
        res.sendFile(__dirname + "/pagina.html");
    })
    .catch(erro => {
        res.write(erro);
        res.end();
    });

    
});

// Servidor
app.listen(porta);
