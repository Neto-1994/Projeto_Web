const express = require('express');
const passport = require('passport');
const localstrategy = require('passport-local');
const bcrypt = require("bcryptjs");
const router = express.Router();
const db = require("./db.js");

/*
function findUser(nome) {
    return results.find(item => item.nome === nome);
}

passport.serializeUser((user, done) => {
    done(null, user.id);
})*/

passport.use(new localstrategy(function verificar(nome, senha, retorno) {
    let consulta = db.selectCustomers(nome);
    (err, row) => {
        if (err) { return retorno(err); }
        if (!row) { return retorno(null, false, { message: "Incorreto usuário ou senha.." }); }

        const isValid = bcrypt.compareSync(senha, consulta.senha);
        if (!isValid) return retorno(null, false, { message: "Incorreto usuário ou senha.." });

        return retorno(null, row);
    }
}));

router.get('/', function (req, res, next) {
    res.render("login");
});

router.post('login/senha', passport.authenticate('local', {
    successRedirect: '/pagina',
    failureRedirect: '/login'
}));

/*usernameField: "usuario",
    passwordField: "senha"
    },
(nome, senha, done) => {
    try {
        const user = findUser(nome);
        if (!user) return done(null, false);

        const isValid = bcrypt.compareSync(senha, results.senha);
        if (!isValid) return done(null, false);
        return done(null, user);

    } catch (err) {
        console.log(err);
        return done(err, false);
    }
}));*/

module.exports = router;
