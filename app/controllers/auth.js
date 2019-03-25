module.exports.return = (req, res) => {
    res.render('login', {errors: {}});
}

const validationErrors = (req) => {
    req.assert('username', 'Usuário é obrigatório!').notEmpty();
    req.assert('password', 'Senha é obrigatório').notEmpty();

    return req.validationErrors();
}

module.exports.auth = (application, req, res) => {
    let errors = validationErrors(req);

    const connection = application.config.database;
    const user = new application.app.models.user(connection);
    if (errors) {
        res.render('login', {errors: errors});
    } else if (user.auth(req.body)) {
        res.render('dashboard');
    } else {
        res.render('login', {errors: [{
            msg: 'Usuário e/ou Senha estão incorretos!'
        }]});
        return;
    }
}
