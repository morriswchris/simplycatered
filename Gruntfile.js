module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    //load config
    require('grunt-simple-config')(grunt, {
        location: "./grunt/config"
    });

    //start our timer
    require("grunt-timer").init(grunt, grunt.config.get("grunt-timer") || {});

    //load npm tasks
    require('load-grunt-tasks')(grunt, {
            pattern: ["grunt-*", "!grunt-timer", "!grunt-simple-config"]
    });

    // Load registered tasks/aliases
    grunt.loadTasks('./grunt/tasks');    
};
