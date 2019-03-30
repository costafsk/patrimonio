module.exports.render = (req, res) => {
    res.render('dashboard/dashboard');
    return;
}

module.exports.notFound = (req, res) => {
    res.redirect('/');
}