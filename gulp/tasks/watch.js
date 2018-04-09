var gulp  = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// use the gulp-watch plugin
gulp.task('watch', function() {
    
      browserSync.init({
    
        // remove the "black box"
        notify: false,
    
        // tell browserSync where webserver will point (wrf gulpfile)
        server: {
          baseDir: "app"
        }
      });
    
      // first arg - filename of file to watch, second arg - action
      watch('./app/index.html', function() {
    
        // start the task 'html' whenever there are changes to index.html
        // gulp.start('html');
    
        // whenever there is a change in the html file - reload
        // for css - browserSync can inject the changed css without auto refresh
        browserSync.reload();
    
      });
    
      // watch any future folder and all the css files
      watch('./app/assets/styles/**/*.css', function() {
        // gulp.start('styles');
        
        // run the cssInject tsaks instead
        gulp.start('cssInject');
      });
    });

// for only css can inject on the fly
// ['styles'] is the dependency task that needs to run before cssInject
gulp.task('cssInject', ['styles'], function() {
    
      // take the contents of the compiled css file and inject updated styles into the page on the file
      // src() is async fn - need to use return. stream() is for injecting css styles into browser
      return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
    
    });