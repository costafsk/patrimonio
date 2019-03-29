module.exports = (application) => {
    application.get('/', (req, res) => {
        res.render('dashboard/dashboard', {
            errors: {}
        });
    });
}