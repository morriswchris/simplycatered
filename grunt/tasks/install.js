module.exports = function(grunt) {
	grunt.registerTask('install', ['npm-install', 'bower-install-simple']);
};