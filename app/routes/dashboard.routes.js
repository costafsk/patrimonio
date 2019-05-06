module.exports = (application) => {
    application.get('/dashboard', (req, res) => {
        if (req.session.authorized) {
            res.render('dashboard/dashboard');
            application.get('io').emit('user', {
                username: req.body.username,
                type: 1
            });
            return;
        } else {
            res.render('home/home', {
                errors: [{msg:'Usuário é obrigatório!'},{msg: 'Senha é obrigatório!'}],
                username: '',
                password: ''
            });
        }
        // application.app.controllers.dashboard.return(req, res);
    });
    application.post('/dashboard',  (req, res) => {
        application.app.controllers.dashboard.auth(application, req, res);
    });
}