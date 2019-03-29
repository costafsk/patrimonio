module.exports = (application) => {
    application.get('/', (req, res) => {
        res.render('home/home', {
            errors: {}
        });
    });
}