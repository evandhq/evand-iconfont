module.exports = function (grunt) {
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'src/*.svg',
        dest: '../evand/src/fonts/icons',
        options: {
          hashes: false,
          types: ['eot', 'woff2', 'woff', 'ttf'],
          fontFilename: 'icons',
          font: 'icons',
          templateOptions: {
            baseClass: 'icon',
            classPrefix: 'icon-'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);
};
