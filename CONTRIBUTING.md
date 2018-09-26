## Contributions
Improvements to the examples page are welcome and so are new loaders. To contribute please fork and send a pull request, to request a feature or report bugs please open an issue.

### New Loader Contribution
1. The html, css, scss for each loader should be included into a loader object into main.js according to the format in the Loader Code section.
2. The scss for each loader should also be included as a seperate scss file into `src/scss/loaders` with the following name format x_name.scss. Try to use scss variables where possible so that each loading animation can be easily scaled and modified.
3. This scss file should then be imported in main.scss via `@import 'loaders/x_name';` below the existing loader imports.
