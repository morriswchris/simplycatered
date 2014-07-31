module.exports = function(grunt) {
	grunt.registerTask('qunit:dev', ['configureProxies:dev', 'connect:dev', 'qunit']);
};