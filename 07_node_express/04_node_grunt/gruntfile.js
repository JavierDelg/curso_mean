module.exports = function(grunt) {
    var configuracionGrunt = {
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            min: {
                src: "<%= pkg.name %>.js",
                dest: "<%= pkg.name %>.min.js"
            }
        },
        watch: {
            scripts: {
                files: ["./*.js"],
                tasks: ["uglify"],
                options: {
                    spawn: false
                },
            }
        }
    };

    grunt.initConfig(configuracionGrunt);

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("comprime", ["uglify"]);

}