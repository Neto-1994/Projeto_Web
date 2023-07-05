const express = require('express');
const router = express.Router();

router.get("/", function (req, res, next) {
    req.session.destroy(function (err) {
        if (err) {
            console.log("Erro ao destruir sessão: ", err);
            return next(err);
        } else {
            res.clearCookie("connect.sid");
            res.redirect("/login");
        }
    });
});

module.exports = router;