let gulp = require('gulp');
let imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify');
browserSync = require('browser-sync').create();

gulp.task('previewDist', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});

gulp.task('deleteDistFolder', () => {
   return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function () {
    let pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/videos/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**',
        '!./app/index.html'
    ];
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./docs"))
});


gulp.task('optimizeImages', ['deleteDistFolder'], function () {
    return gulp.src(['./app/assets/images/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function () {
    gulp.start('usemin')
});

gulp.task('usemin', ['styles', 'scripts'], function () {
    let pathsToHTML = [
        './app/index.html',
        './app/about-me.html',
        './app/projects.html',
        './app/selfmade.html',
        './app/skills.html',

    ];
   return gulp.src(pathsToHTML)
       .pipe(usemin({
           css: [function () {return rev()}, function () {return cssnano()}],
           js: [function () {return rev()}, function () {return uglify()}]
       }))
       .pipe(gulp.dest("./docs"));
});


gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
