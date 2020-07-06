
module.exports = function(grunt) {

    // Project configuration.
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
		sass: {			
			dev: {
				options: {
				  style: 'expanded',
				  sourcemap: 'none',
				},
				files: {
					'assets/css/custom.css': 'assets/scss/custom.scss',
					'assets/css/responsive.css': 'assets/scss/responsive.scss'
			}
			},
			dist: {
			  files: {
				'assets/css/custom.css': 'assets/scss/custom.scss',
				'assets/css/responsive.css': 'assets/scss/responsive.scss'
	  }
			}
		  },
		  watch: {
			files: ['**/*.scss'],
			tasks: ['sass']
		  }
		
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definitions
	grunt.registerTask('default', ['concat']);
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ["sass"]);
  
};



// module.exports = function(grunt) {

//     grunt.initConfig({
// 		pkg: grunt.file.readJSON('package.json'),

// 		/**
// 		 * Sass
// 		 */
// 		sass: {
// 		  dev: {
// 		    options: {
// 		      style: 'expanded',
// 		      sourcemap: 'none',
// 		    },
// 		    files: {
// 		      'assets/css/custom.css': 'assets/SCSS/custom.scss',
// 					'assets/css/responsive.css': 'assets/SCSS/responsive.scss'
// 		    }
// 		  },
//        /* dist: {
//         options: {
//           style: 'compressed',
//           sourcemap: 'none', 
//         },
//         files: {
//           'assets/css/custom-min.css': 'assets/scss/custom.scss',
//           'assets/css/responsive-min.css': 'assets/scss/responsive.scss'
//         }
//       },*/
// 		},

        
// 	  	/**
// 	  	 * Watch
// 	  	 */
// 		watch: {
// 			css: {
// 				files: '**/*.scss',
// 				tasks: ['sass']
// 			}
// 		},

// 	});
// 	grunt.loadNpmTasks('grunt-contrib-sass');
// 	grunt.loadNpmTasks('grunt-contrib-watch');
// 	grunt.registerTask('default',['watch']);
// }