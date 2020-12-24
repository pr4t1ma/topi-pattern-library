const { watch, src, task, parallel, dest } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const log = require('fancy-log');
const fractal = require('./fractal.config');

// a task to import base variables first, then from within our import file, fetch component styles and add them to a concatenated output file
function styles() {
  return (
    src(['global/import.scss'])
      .pipe(sassGlob())
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('styles.css'))
      // this is where site.css will be output. You'll reference this file in your _preview.hbs, so make sure the location is located in the static asset folder defined in fractal.js
      .pipe(dest('./public/css'))
  );
}

function fractalServer() {
  const server = fractal.web.server({ sync: true });
  server.on('error', ({ message }) => log.error(message));
  return server.start().then(() => {
    log.info('=========================');
    log.info('Fractal web UI is running');
    log.info('=========================');
    log.info(`Local:       ${server.urls.sync.local}`);
    log.info(`Network:     ${server.urls.sync.external}`);
    log.info(`BrowserSync: ${server.urls.sync.ui}`);
    log.info('=========================');
  });
}

// watcher
task('watch', () => {
  // don't watch our import file for changes, watch the underlying partials for changes. If changes, run styles task to re-compile
  watch(['global/**.scss', 'components/**/*.scss'], styles);
});

task('default', parallel(['watch', fractalServer]));
// make sure you run fractal with "fractal start --sync" to use livereload in conjunction with this
