module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // uglify: {
    //    options: {
    //     mangle: false
    //   },
    //   my_target: {
    //     files: {
    //       'dist/assets/js/main.min.js': ['assets/js/bundle/*.js']
    //     }
    //   }
    // },

    grunticon: {
        icons: {
            options: {
              src: "src/assets/img/",
              dest: "src/assets/css/icn"
            }
        }
    },

    // targethtml: {
    //   dist: {
    //     files: {
    //       'dist/site/snippets/footer.php': 'site/snippets/footer.php'
    //     }
    //   }
    // },

  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-grunticon');
  //grunt.loadNpmTasks('grunt-targethtml');

  // Default task(s).
  //grunt.registerTask('default', ['grunt-contrib-uglify','grunt-targethtml']);
  grunt.registerTask('default', ['grunt-grunticon']);


};