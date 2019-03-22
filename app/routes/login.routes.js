module.exports = (application) => {
    application.get('/', (req, res) => {
        application.app.controllers.login.render(res);
    });
}