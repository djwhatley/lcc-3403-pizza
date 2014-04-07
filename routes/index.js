
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Pizza' })
};

exports.about = function(req, res){
  res.render('about', { title: 'About Pizza' })
};

exports.contact = function(req, res){
	res.render('contact', { title: 'Contact Us' })
};
