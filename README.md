## css-loaders

#### Collection of loading animations in CSS
CSS Loaders is a collection of CSS loading animations that aim to be simple yet effective in keeping users attention while the content loads. Each loader consists of html, scss and then the css built from the scss. SCSS has been used to improve readability and modification through the use of SCSS variables, mixins, and includes.

Loaders example page is live at http://danielhearn.co.uk/css-loaders

## Loader Code

The code for the loaders being shown on the example page can be found within `src/js/main.js` in the `loaders` array at the top of the file. With each loader being an individual object in this array with name, colour, html, css, scss keys that contain the loader's information. 

```javascript
{
  name: 'Loader name',
  colour: 'Loader hex code',
  html: `Loader HTML with formatting preserved via template literals`,
  css: `Loader CSS with formatting preserved via template literals`,
  scss: `Loader SCSS with formatting preserved via template literals`
}
```

The scss source code for each loader can be found within `src/scss/loaders` in individual named and numbered files following the x_name.scss format. Each loader scss file is imported into main.scss via `@import 'loaders/x_name'`;

## Gulp tasks
- Watch: Use browsersync to reload files and compiles pug, scss.
- Build: Complies pug, scss and builds files from src to dist, including compressing images, js, css

## TODO:
- Change code font to 'Source Code Pro'
- Add example gifs to readme
- Add more loaders
- Make background colours to have a more consistent palette
- Improve mobile styling especially on landscape to be more user friendly with more spacing between elements.

## Contributions

Improvements to the examples page are welcome and so are new loaders.
To contribute please fork and send a pull request, to request a feature or report bugs please open an issue.

#### New Loader Contribution

1. The html, css, scss for each loader should be included into a loader object into main.js according to the format in the Loader Code section.
2. The scss for each loader should also be included as a seperate scss file into `src/scss/loaders` with the following name format x_name.scss. Try to use scss variables where possible so that each loading animation can be easily scaled and modified.
3. This scss file should then be imported in main.scss via `@import 'loaders/x_name';` below the existing loader imports.
