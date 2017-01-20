module.exports = {

	showHome: (req, res)=>{

		res.render('pages/home');	// it looks into pages by default

		res.send('Hi programmer');

	}

};