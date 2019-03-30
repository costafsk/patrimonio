module.exports = (application) => {
    application.get('/', (req, res) => {
        if (req.session.authorized) {
            res.redirect('/dashboard');
        } else {
            res.render('home/home', {
                errors: {},
                username: '',
                password: '',
            });
        }
        
    });
}