module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      my_target: {
        files: {
          'dist/assets/js/main.min.js': ['src/assets/js/bundle/*.js']
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
          'dist/index.html': 'src/index.html'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'dist/assets/css/main.min.css': ['src/assets/css/main.css']
        }
      }
    },

    jshint: {
      files: {
        src: ['src/assets/js/bundle/main.js']
      }
    },

    watch: {
      options: {
        livereload: true,
      },

      scripts: {
        files: ['<%= jshint.files.src %>'],
        tasks: ['jshint']
      },

      css: {
        files: ['src/assets/sass/*.scss', 'src/assets/sass/partials/*.scss'],
        tasks: ['compass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  
  grunt.registerTask('work', ['watch']);
  grunt.registerTask('build', ['uglify', 'cssmin', 'targethtml', 'grunticon']);


};