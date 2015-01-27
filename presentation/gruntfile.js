module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            mdimpress: {
                files: [{ expand: true, 
			  cwd: "less/",
			  src: ["*.less"],
			  dest: "css/",
			  ext: ".css"}]
            }
        },
        exec: {
            mdimpress: {
                cmd: function() { // call mdimpress.py with first .md file found in current folder
                    var f = grunt.file.expand({matchBase:false},"*.md");
                    if(f.length>0) return "mdimpress "+f[0];
                },
            }
        },
        watch: {
            less: {
                files: "**/*.less",
                tasks: ["less"]
            },
            exec: {
                files:"*.md",
                tasks: ["exec"]
            },
            livereload: {
                files: ["*.html","**/*.css"],
                tasks: [],
                options: { livereload: 35729 },
            },
        },
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default',['exec','less','watch']);    
};
