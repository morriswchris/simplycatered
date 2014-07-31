var path = "app/templates/";
module.exports = {
	compile: {
		options: {
			namespace: "<%= pkg.config.template.namespace",
			processName: function(filepath) {
				var fileName = filepath.replace(path, ""),
					name = fileName.substr(0, fileName.lastIndexOf(".")).replace("/", ":");
				return name;
			},
			amd: true
		},
		files: {
			"<%= pkg.config.template.dest %>": ["<%= pkg.config.template.srcPath %>/**/*.tpl"]
		}
	}
};