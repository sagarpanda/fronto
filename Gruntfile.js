module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
                options: {
                    baseUrl: "public/js",
                    mainConfigFile: "public/js/cfg.js",
                    name: "main",
                    optimize: "none",
                    out: "public/build/js/main.js",
                    generateSourceMaps: true,
                    preserveLicenseComments: false
                    //appDir: "public",
                    //dir: "public",
                }
            }
        },

        uglify: {
            my_target: {
                /*options: {
                    sourceMap: true,
                    sourceMapName: 'public/js/build/main.js.map'
                },*/
                files: {
                    'public/build/js/main.js': ['public/build/js/main.js'],
                    'public/js/cfg.js': ['public/js/cfg.js']
                }
            }
        },

        /*cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/css/',
                    //src: ['*.css', '!*.min.css'],
                    src: ['*.css'],
                    dest: 'public/build/css/',
                    ext: '.min1.css'
                }]
            }
        }*/

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public/build/css/style.css': [
                        'public/css/bootstrap.min.css', 
                        'public/css/bootstrap-theme.min.css', 
                        'public/css/style.css'
                    ]
                }
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true, 
                        cwd: 'public/js/libs/vendor/', 
                        src: ['require.js'], 
                        dest: 'public/build/js'
                    }, {
                        expand: true, 
                        cwd: 'public/js/', 
                        src: ['cfg.js'], 
                        dest: 'public/build/js'
                    }
                ]
            }
        },

        processhtml: {
            options: {
                data: {
                    message: 'Hello world!'
                }
            },
            dist: {
                files: {
                    'public/build/index.html': ['public/index.html']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');

    // Default task(s).
    grunt.registerTask('default', ['requirejs', 'cssmin', 'copy', 'uglify', 'processhtml']);
    grunt.registerTask('build', ['requirejs', 'copy']);

};