'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourceComments: 'map'
        },
        files: {
            'app/css/app.css': 'app/sass/app.scss'
        }
      }
    },
    watch: {
      files: ['app/sass/*.scss'],
      tasks: 'default' //TODO could this just be 'sass'?
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);

};