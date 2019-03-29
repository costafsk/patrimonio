module.exports = (application) => {
    application.get('/auth', (req, res) => {
        application.app.controllers.auth.return(req, res);
    });
    application.post('/auth',  (req, res) => {
        application.app.controllers.auth.auth(application, req, res);
    });
}