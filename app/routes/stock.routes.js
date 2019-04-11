module.exports = (application) => {
    application.get('/stock', (req, res) => {
        if (req.session.authorized) {
            application.app.controllers.stock.render(req, res);
        } else {
            application.app.controllers.dashboard.notFound(req, res);
        }
    });
}