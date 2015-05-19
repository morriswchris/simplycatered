module.exports = {
	deps: {
		files: [{
			expand: true,
			cwd: 'app',
			src: ['**', '!conf/**'],
			dest: 'www'
		}, {
			src: "bower_components/jquery/dist/jquery.min.js",
			dest: "www/assets/js/jquery.js"
		}, {
			src: "bower_components/bootstrap/dist/js/bootstrap.min.js",
			dest: "www/assets/js/bootstrap.js"
		}, {
			src: "bower_components/stellar/jquery.stellar.min.js",
			dest: "www/assets/js/stellar.js"
		}]
	},
	src: {
		files: []
	}
};