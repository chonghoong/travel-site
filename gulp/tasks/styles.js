var gulp  = require('gulp'),
 postcss = require('gulp-postcss'),
 autoprefixer = require('autoprefixer'),
 cssvars = require('postcss-simple-vars'),
 nested = require('postcss-nested'),
 cssImport = require('postcss-import'),
 mixins = require('postcss-mixins');

gulp.task('styles', function() {
    // console.log("Imagine Sass or PostCSS tasks running here");
    return gulp.src('./app/assets/styles/styles.css')
           .pipe(postcss([cssImport, mixins, cssvars,nested,autoprefixer]))
        //    error handling
           .on('error', function(errorInfo) {
               console.log(errorInfo.toString());
               // gracefully end the task ad the watch task can continue
               this.emit('end');
           })
           //    error handling
           .pipe(gulp.dest('./app/temp/styles/'));
  
  });