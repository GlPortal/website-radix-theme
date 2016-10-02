module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style/css/style.css' : 'style/scss/style.scss'
				}
			}
		},
    copy: {
      main: {
        files:[
          {
            src:
            'style/bower_components/jquery/dist/jquery.js',
            dest: 'style/js/jquery.js'
          },
          {
            src:
            'style/bower_components/bootstrap/dist/js/bootstrap.min.js',
            dest: 'style/js/bootstrap.js'
          },
          {
            src:
            'style/bower_components/bootstrap/dist/css/bootstrap.min.css',
            dest: 'style/css/bootstrap.css'
          }
        ]
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'static/style.min.css': ['style/css/bootstrap.css', 'style/css/style.css']
        }
      }
    },
    uglify: {
      options: {
        mangle: {
          except: ['jQuery', 'Backbone']
        }
      },
      my_target: {
        files: {
          'static/script.min.js': ['style/js/jquery.js', 'style/js/bootstrap.js']
        }
      }
    },
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['sass', 'copy', 'cssmin', 'uglify', 'watch']);
  grunt.registerTask('build',['sass', 'copy', 'cssmin', 'uglify']);
}
