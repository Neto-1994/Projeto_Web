const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.render("qualidadedados", { nome: req.session.name });
});

module.exports = router;