//GET /author

exports.author = function (req, res) {
    res.render('author', { author: 'Graciela Henriquez Fernandez '});
};

