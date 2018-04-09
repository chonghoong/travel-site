// when use require function, don't need the .js function
require ('./gulp/tasks/styles');
require('./gulp/tasks/watch');


// var gulp  = require('gulp'),
    // watch = require('gulp-watch'),
    
    // move to styles.js
    // postcss = require('gulp-postcss'),
    // autoprefixer = require('autoprefixer'),
    // cssvars = require('postcss-simple-vars'),
    // nested = require('postcss-nested'),
    // cssImport = require('postcss-import'),
    // move to styles.js
    
    // browserSync = require('browser-sync').create();


// dummy task - no need
    // // first arg - name of task, second arg - action
// // default task
// gulp.task('default', function() {
//   console.log('Hooray - you created a Gulp task');
// });

// dummy task no need
// gulp.task('html', function() {
//   console.log("Imagine something useful being done to your HTML here.");
// });

// move to separate styles.js
// gulp.task('styles', function() {
//   // console.log("Imagine Sass or PostCSS tasks running here");
//   return gulp.src('./app/assets/styles/styles.css')
//          .pipe(postcss([cssImport, cssvars,nested,autoprefixer]))
//          .pipe(gulp.dest('./app/temp/styles/'));

// });

// move to separate watch.js file
// // use the gulp-watch plugin
// gulp.task('watch', function() {

//   browserSync.init({

//     // remove the "black box"
//     notify: false,

//     // tell browserSync where webserver will point (wrf gulpfile)
//     server: {
//       baseDir: "app"
//     }
//   });

//   // first arg - filename of file to watch, second arg - action
//   watch('./app/index.html', function() {

//     // start the task 'html' whenever there are changes to index.html
//     // gulp.start('html');

//     // whenever there is a change in the html file - reload
//     // for css - browserSync can inject the changed css without auto refresh
//     browserSync.reload();

//   });

//   // watch any future folder and all the css files
//   watch('./app/assets/styles/**/*.css', function() {
//     // gulp.start('styles');
    
//     // run the cssInject tsaks instead
//     gulp.start('cssInject');
//   });
// });
// move to separate watch.js file

// // for only css can inject on the fly
// // ['styles'] is the dependency task that needs to run before cssInject
// gulp.task('cssInject', ['styles'], function() {

//   // take the contents of the compiled css file and inject updated styles into the page on the file
//   // src() is async fn - need to use return. stream() is for injecting css styles into browser
//   return gulp.src('./app/temp/styles/styles.css')
//     .pipe(browserSync.stream());

// });