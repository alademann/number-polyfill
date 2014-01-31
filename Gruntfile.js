module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            compile: {
                files: {
                  './<%= pkg.name %>.js': './src/<%= pkg.name %>.coffee',
                  './test/spec.js': 'src/spec.coffee'
                }
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %>.min.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                src: ['./<%= pkg.name %>.js'],
                dest: './<%= pkg.name %>.min.js'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: './src/',
                    cssDir:  './'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['coffee', 'uglify', 'compass']);
};