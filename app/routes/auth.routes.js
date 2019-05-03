module.exports = (application) => {
    application.get('/dashboard', (req, res) => {
        application.app.controllers.auth.return(req, res);
    });
    application.post('/dashboard',  (req, res) => {
        application.app.controllers.auth.auth(application, req, res);
    });
}