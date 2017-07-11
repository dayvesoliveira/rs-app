module.exports = function(grunt) {
 
  grunt.file.defaultEncoding = 'ISO88591';

  var SCSS_FILES = {
    'src/assets/css/main.css':    'src/assets/scss/rs-main.scss'
  };

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        
        options: {
          style: 'compressed'
        },
        
        files: SCSS_FILES
      },
      dev: {
        
        options: {
          style: 'expanded'
        },

        files: SCSS_FILES
      }
    }
	
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  // automatizando
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Tarefas que serao executadas
  grunt.registerTask('default', ['sass']);
  // Tarefa para Watch
  //grunt.registerTask( 'w', ['watch'] );
  
};