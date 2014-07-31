module.exports = {
	server: {
		options: {
			port: <%= pkg.config.webroot.port %> ,
			base: "<%= pkg.config.webroot.base %>"
		}
	}
};