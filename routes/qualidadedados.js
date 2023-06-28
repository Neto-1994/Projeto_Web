const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.render("qualidade_dados", { nome: req.session.user });
});

module.exports = router;