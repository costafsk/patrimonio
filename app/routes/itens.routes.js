module.exports = (application) => {
    application.get('/itens', (req, res) => {
        if (req.session.authorized) {
            application.app.controllers.itens.render(req, res);
        } else {
            application.app.controllers.dashboard.notFound(req, res);
        }
    });
}