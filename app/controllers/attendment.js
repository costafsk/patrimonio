module.exports.newAttendment = (req, res) => {
    // Validation
    req.assert('place', 'Indicação de local é Obrigatório').notEmpty();
    req.assert('description', 'Descrição Obrigatória').notEmpty();
    
    const errors = req.validationErrors();

    if (errors) {
        // RETURN ERRORS WITH MODAL DASHBOARD PAGE >
        console.log(errors);
    } else {
        console.log('PILEDRIVER WALTZ');
    }

    // Utilize Model
}