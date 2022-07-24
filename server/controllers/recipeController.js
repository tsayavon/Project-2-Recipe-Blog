




/**
 * GET /
 * HomePage
 */

exports.homepage = async(req, res) => {
    res.render('index', { title: 'Recipe Blog - Homepage' });
}