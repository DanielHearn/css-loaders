# css-loaders
## Collection of loading animations in CSS

Loaders example page is live at http://danielhearn.co.uk/css-loaders

## Loader Code

The code for the loaders being shown on the example page can be found within src/js/main.js in the loaders array at the top of the file. With each loader being an individual object with name, colour, html, css, scss keys that contain the loader's information. 

The scss source code for each loader can be found within src/scss/loaders in individual named and numbered files following the x_name.scss format. Each loader scss file

### Gulp tasks
- Watch: Use browsersync to reload files and compiles pug, scss.
- Build: Complies pug, scss and builds files from src to dist, including compressing images, js, css

### Contributions

Improvements to the examples page are welcome and so are new loaders.
To contribute please fork and send a pull request, to request a feature or report bugs please open an issue.

1. The html, css, scss should be included into a loader object into main.js according to the format in the Loader Code section. 2. The scss should also be included as a seperate scss file into src/scss/loaders with the following name format x_name.scss
3. This file should then be imported in main.scss via @import 'loaders/x_name';
