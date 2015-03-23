module.exports = function (grunt) {
  grunt.initConfig({

    zetzer: {
      main: {
        options: {
          templates: '../templates',
          dot_template_settings: { strip: false }
        },
        files: [{
          expand: true,
          cwd: '../pages/',
          src: '**/*.dot.html',
          dest: '../../',
          ext: '.html'
        }]
      }
    },

    watch: {
      all: {
        files: '../**/*',
        tasks: ['zetzer']
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          livereload: true,
          base: "../../"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-zetzer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
};
