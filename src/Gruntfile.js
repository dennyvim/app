module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			dist:{
				files: {
				'board.min.css':'board.css',
                    'card.min.css':'card.css',
                    'checkVictory.min.css':'checkVictory.css',
                    'footer.min.css':'footer.css',
                    'gameClassic.min.css':'gameClassic.css',
                    'header.min.css':'header.css',
                    'home.min.css':'home.css',
                    'index.min.css':'index.css',
                    'levels.min.css':'levels.css',
                    'splash.min.css':'splash.css',
                    'victory.min.css':'victory.css',
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['cssmin']);
}