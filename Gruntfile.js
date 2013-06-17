module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
       options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/assets/js/main.min.js': ['assets/js/bundle/*.js']
        }
      }
    },

    grunticon: {
        icons: {
            options: {
              src: "src/assets/img/",
              dest: "dist/assets/css/icn"
            }
        }
    },

    targethtml: {
      dist: {
        files: {
          'dist/index.html': 'index.html'
        }
      }
    },

    // jshint: {
    //   files: {
    //     src: ['src/assets/js/bundle/main.js']
    //   }
    // }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-targethtml');
 //grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['grunt-contrib-uglify','grunt-targethtml', 'grunt-grunticon']);


};