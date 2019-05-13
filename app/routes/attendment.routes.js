module.exports = (application) => {
    application.post('/newAttendment', (req, res) => {
        if(req.session.authorized) {
            application.app.controllers.attendment.newAttendment(req, res);
        }
    });
}