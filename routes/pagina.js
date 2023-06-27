const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    console.log(req.session.user);
    res.render("pagina", { nome: req.session.user });
});

module.exports = router;