// Importações
var express = require('express');
const session = require('express-session');
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
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));
app.use(session({
    secret: "sessionusuario",
    name: "acesso",
    //store: sessionStore, // connect-mongo session store
    proxy: false,
    resave: false,
    saveUninitialized: false
}));

app.get('/', function (req, res) {
    if (req.session.usuario) {
        console.log(req.session.usuario);
        res.render("pagina", { nome: req.session.usuario });
    } else {
        res.render("index");
    }
});

app.post('/', function (req, res) {
    db.selectCustomers(req.body.usuario, req.body.senha)
        .then(retorno => {
            if (retorno == "Autorizado") {
                console.log(retorno);
                req.session.usuario = req.body.usuario;
                res.render("pagina", { nome: req.body.usuario });
            } else {
                res.render("index");
            }
        })
        .catch(erro => {
            console.log(erro);
            if (erro == "Senha") {
                res.render("index");
            } else {
                res.render("index");
            }
        });
});

app.get('/sair', function (req, res) {
    req.session.usuario = null;
    res.redirect('/');
});

app.get('/dados', function (req, res) {
    res.render("Visualizacao_Dados", { nome: req.session.usuario });
});

// Servidor
app.listen(porta);
