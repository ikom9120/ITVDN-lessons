const {src, dest} = require('gulp');

function move() {
    return src('app/*')
        .pipe(dest('build/'));     // делает выборку всех файлов и делает перенос в новую директорию build.
}

exports.move = move;

function move2() {
    return src(['build/*', '!build/*.css'])
        .pipe(dest('no-css/'));    // выбирает все файлы кроме файлов стилей и переносит в директорию no-css.
}

exports.move2 = move2;

const {parallel} = require('gulp');
exports.dev = parallel(move, move2);   //  выполняет параллельное выполнение двух предыдущих тасков.
