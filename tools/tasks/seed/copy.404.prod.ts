import * as gulp from 'gulp';
import { join } from 'path';

import { APP_SRC, APP_DEST } from '../../config';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return gulp.src([join(APP_SRC, '**/404.html')])
    .pipe(gulp.dest(APP_DEST));
};
