const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get("/", function (req, res, next) {
    res.render("login", { message: null });
});

router.post("/", function (req, res, next) {
    passport.authenticate('local', function (err, user, info, status) {
        var n = req.body.usuario;
        req.session.user = n;
        // console.log("Nome da sessao: ", req.session);

        if (err) { return next(err) };
        if (!user) {
            if (info == "usuario") {
                return res.render("login", { message: "Usuário incorreto.." });
            } else {
                return res.render("login", { message: "Senha incorreta.." });
            }
        }
        res.render("pagina", { nome: req.session.user });
    
    })(req, res, next);
});

module.exports = router;