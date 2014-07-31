module.exports = function(grunt) {
	grunt.registerTask('global', ['clean', 'copy', 'less', 'jst']);
};