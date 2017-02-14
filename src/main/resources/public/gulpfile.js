const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// TypeScript compile
//gulp.task('compile', function () {
//    return gulp
//        .src('app/**/*.ts')
//        .pipe(typescript(tscConfig.compilerOptions))
//        .pipe(gulp.dest('dist/'));
//});

// copy dependencies
gulp.task('copy:libs', function() {
    return gulp.src([
        'node_modules/@angular/**/*',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/**/*',
        'systemjs.config.js'
    ], { base: "." })
        .pipe(gulp.dest('dist'))
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', function() {
    return gulp.src([
        'app/**/*',
        'index.html',
        'styles.css',
        '!app/**/*.ts',
        '!app/**/*.map',
        '!app/**/*.scss'
    ], { base : '.' })
        .pipe(gulp.dest('dist'))
});

gulp.task('build', ['compile']);
gulp.task('default', ['build']);