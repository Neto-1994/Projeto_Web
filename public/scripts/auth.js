const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require("./db.js");

module.exports = function (passport) {
    passport.serializeUser((user, done) => {
        process.nextTick(function () {
            done(null, { id: user.id, username: user.Nome });
        });
    });

    passport.deserializeUser((user, done) => {
        process.nextTick(function () {
            done(null, user);
        });
    });

    passport.use(new LocalStrategy({
        usernameField: "usuario",
        passwordField: "senha"
    },
        async (nome, senha, done) => {
            try {
                var user = await db.selectUser(nome);

                if (!user) return done(null, false, "usuario");

                // let isValid = bcrypt.compareSync(senha, user[0].Senha);
                if (senha != user[0].Senha) return done(null, false, "senha");

                return done(null, user);
            } catch (err) {
                return done(err, false);
            }
        }
    ));
};
