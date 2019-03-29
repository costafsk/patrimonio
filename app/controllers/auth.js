// GET
module.exports.return = (req, res) => {
    res.render('home/home', {
        errors: [
            {
                msg:'Usuário é obrigatório!'
            },
            {
                msg: 'Senha é obrigatório!'
            }
        ]
    });
}

// POST 
module.exports.auth = (application, req, res) => {

    req.assert('username', 'Usuário é obrigatório!').notEmpty();
    req.assert('password', 'Senha é obrigatório').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render('home/home', {errors: errors});
        return;
    }

    // Validation

    const connection = application.config.database;
    const user = new application.app.models.user(connection);

    if(user.auth(req)) {
        res.redirect('/dashboard');
    }
}
