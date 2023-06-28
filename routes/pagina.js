const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    //console.log("Nome da sessao pagina: ", req.locals.authenticated);
    res.render("pagina", { nome: req.session.user });
});

module.exports = router;