const gulp      = require('gulp'),
    config      = require('../config'),
    flog        = require('fancy-log'),
    gulpPlugins = require('../utils/gulpPlugins'),
    merge       = require('merge-stream');

const eslint = () => {
    flog.info('lint scripts');

    let tasks = config.themes.bundles.map(function(theme) {
        flog.info('\tlint script ' + theme.js.src);

        return gulp.src(theme.js.src)
            .pipe(gulpPlugins.eslint({
                    'extends': 'neofonie'
                }
            ))
            .pipe(gulpPlugins.eslint.format());
    });

    return merge(tasks);
};

module.exports = eslint;
