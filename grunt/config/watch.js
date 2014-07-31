module.exports = {
	options: {
		livereload: true
	},
	less: {
		files: ['app/styles/*.less', 'app/assets/less/*.less'],
		tasks: 'less'
	},
	jst: {
		files: ['app/templates/**/*'],
		tasks: 'jst'
	},
	copy: {
		files: ['app/src/**/*.js', '!app/src/**/*_flymake.js', 'app/*.html', 'app/assets/**/*'],
		tasks: 'copy'
	}
};