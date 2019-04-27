module.exports.render = (req, res) => {
    res.render('dashboard/dashboard', {});
    console.log('PARAMS -------------------');
    console.log(req.params);
    return;
}

module.exports.notFound = (req, res) => {
    res.redirect('/');
}