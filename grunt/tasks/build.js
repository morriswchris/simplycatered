module.exports = function(grunt) {
	grunt.registerTask('build', ['install', 'devUpdate:report', 'global', 'copy:prod', 'rpm']);
};
