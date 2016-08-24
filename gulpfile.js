var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    
    webpack = require('webpack'),
    webpackGulp = require('webpack-stream'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackConfig = require('./webpack.config'),
    bundler = webpack( webpackConfig );

gulp.task('webpack', function () {
  return gulp.src('src/index.jsx')
    .pipe(webpackGulp( webpackConfig ))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy:assets', function () {
   return gulp
    .src(['src/index.html'])
    .pipe(gulp.dest('./dist'))
});

gulp.task('copy:libs', function () {
  return gulp
    .src(
      [
        "node_modules/react/dist/react.js",
        "node_modules/react-dom/dist/react-dom.js"
      ],
      { base: 'node_modules' }
    )
    .pipe(gulp.dest('./dist/lib'))
});

gulp.task('serve', ['copy:assets', 'copy:libs'], function () {
  browserSync.init({
    port: +process.env.PORT || 8080,
    server: {
      baseDir: './dist',
      middleware: [
        webpackDevMiddleware(bundler, { stats: { colors: true } }),
        webpackHotMiddleware(bundler)
      ]
    },
    ui: {
      port: +process.env.PORT+1 || 8081
    }
  });
});

gulp.task('default',['serve']);