module.exports = (application) => {
    application.get('/dashboard/sectors', (req, res) => {
        if (req.session.authorized) {
            res.send("sectors");
        } else {
        }
    });
}