module.exports = function (grunt) {
  grunt.initConfig({
    zetzer: {
      main: {
        options: {
          templates: '../templates'
        },
        files: [
        {
          expand: true,
          cwd: '../pages/',
          src: '**/*.dot.html',
          dest: '../../',
          ext: '.html'
        }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-zetzer');
  grunt.registerTask('default', 'zetzer');
};
