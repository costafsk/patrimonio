module.exports = (application) => {
    application.get('/cabinets', (req, res) => {
        if (req.session.authorized) {
            application.app.controllers.cabinets.render(req, res);
        } else {
            application.app.controllers.dashboard.notFound(req, res);
        }
    });
}