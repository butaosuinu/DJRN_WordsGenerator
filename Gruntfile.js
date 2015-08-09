module.exports = function(grunt) {

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({
		
		connect:{
			server:{
				options:{
					port: 8000,
					livereload: true
				}
			}
		},
		watch:{
			live:{
				files: ['**/*.html','**/*.css'],
				tasks: '',
				options:{
					livereload: true
				}
			}
		}
	});

	var taskName;
	for (taskName in pkg.devDependencies) {
		if (taskName.substring(0, 6)== 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}

	grunt.registerTask('default', ['connect','watch']);
};