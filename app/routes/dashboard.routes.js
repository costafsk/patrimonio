module.exports = (application) => {
    application.get('/dashboard', (req, res) => {
        if (req.session.authorized) {
            application.app.controllers.dashboard.render(req, res);
        } else {
            application.app.controllers.dashboard.notFound(req, res);
        }
    });
}