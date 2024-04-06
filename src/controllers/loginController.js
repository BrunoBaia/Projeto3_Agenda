const Login = require('../models/loginModel');

exports.index = (req, res) => {
    // console.log(req.session.user);
    if(req.session.user) return res.render('login-logado.ejs');
    res.render('login.ejs');
};

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
        } else {
            req.flash('success', 'Seu usuario foi criado com sucesso.');
        }
        req.session.save(function () {
            return res.redirect('/login/index');
        });
    } catch (e) {
        console.log(e);
        return res.render('404.ejs');
    }

};

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
        } else {
            req.flash('success', 'Voce conectou com sucesso.');
        }
        req.session.user = login.user;
        req.session.save(function () {
            return res.redirect('/login/index');
        });
    } catch (e) {
        console.log(e);
        return res.render('404.ejs');
    }

};

exports.logout = function (req, res) {
    req.session.destroy();
    res.redirect('/');
}
