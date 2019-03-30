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
module.exports.auth = async (application, req, res) => {

    req.assert('username', 'Usuário é obrigatório!').notEmpty();
    req.assert('password', 'Senha é obrigatório').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render('home/home', 
        {
            errors: errors,
            username:req.body.username,
            password: req.body.password
        }); return;
    }

    // Validation

    const connection = application.config.database;
    const user = new application.app.models.user(connection);

    if(await user.auth(req)) {
        req.session.authorized = true;
        res.redirect('/dashboard');
    } else {
        res.render('home/home', {
            errors: [{msg: 'Usuário e/ou senha Invalidos'}],
            username: req.body.username,
            password: req.body.password
        });
    }
}
