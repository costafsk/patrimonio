module.exports = (application) => {
    application.get('/sectors', (req, res) => {
        if (req.session.authorized) {
            application.app.controllers.sectors.render(req, res);
        } else {
            application.app.controllers.dashboard.notFound(req, res);
        }
    });
}