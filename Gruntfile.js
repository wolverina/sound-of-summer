module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
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

    cssmin: {
      combine: {
        files: {
          'dist/assets/css/main.min.css': ['src/assets/css/main.css']
        }
      }
    }

    // jshint: {
    //   files: {
    //     src: ['src/assets/js/bundle/main.js']
    //   }
    // }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
 //grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['grunt-contrib-uglify', 'grunt-contrib-cssmin', 'grunt-targethtml', 'grunt-grunticon']);


};