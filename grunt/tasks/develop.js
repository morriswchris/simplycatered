module.exports = function(grunt) {
	grunt.registerTask('develop', ['devUpdate:prompt', 'global', 'connect', 'watch']);
};