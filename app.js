// Importações
const express = require('express');
const session = require('express-session');
require('dotenv').config();
const bodyparser = require('body-parser');
const path = require('path');
const passport = require('passport');
require("./public/scripts/auth.js")(passport);
const dbacqua = require("./public/scripts/dbacqua.js");

// Middleware redirecionamento de acessos
function authenticateMiddleware(req, res, next) {
    if (req.session.user) return next();
    res.redirect("/login");
};

// Objeto para funcionalidades do Express
var app = express();

// Configuração BodyParser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Configuração para as views
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Configurações
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Configurações da sessão
app.use(session({
    secret: process.env.SECRET_SESSION,
    //name: "acesso", // Nome para a sessão cookie
    proxy: false,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 60 * 1000 }, // 30 min /*12*60*60*1000 12h*/
}));

// Middleware para adicionar configuração a todas as respostas do servidor
// Configuração para impedir retorno de páginas após sair
app.use((req, res, next) => {
    res.header("Cache-Control", "no-store");
    next();
});

// Salvar a sessão do usuário
app.use(passport.authenticate("session"));

// Rotas
var login = require("./routes/login.js");
var sair = require("./routes/sair.js");
var pagina = require("./routes/pagina.js");
var qd = require("./routes/qualidadedados.js");

// Direcionamento das rotas
app.use("/login", login);
app.use("/", authenticateMiddleware, pagina);
app.use("/qualidadedados", authenticateMiddleware, qd);
app.use("/sair", sair);

app.get('/qualidadedados/estacoes', async function (req, res) {
    const estacoes = await dbacqua.selectEstacoes();
    res.json(estacoes);
});

app.get('/qualidadedados/transmissoes', async function (req, res) {
    const transmissoes = await dbacqua.selectTransmissoes();
    res.json(transmissoes);
});

// Servidor
app.listen(process.env.PORTA);
