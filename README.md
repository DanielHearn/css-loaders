## css-loaders

#### Collection of loading animations in CSS
CSS Loaders is a collection of CSS loading animations that aim to be simple yet effective in keeping users attention while the content loads. Each loader consists of HTML, SCSS and then the CSS built from the SCSS. SCSS has been used to improve readability and modification through the use of SCSS variables, mixins, and includes.

Loaders example page is live at http://danielhearn.co.uk/css-loaders with easy access to all loader code.

![Example image of a loading animation](readme-assets/demo-1.gif)
![Example image of a loading animation](readme-assets/demo-2.gif)

## Loader Code

The code for the loaders being shown on the example pages can be found within `src/js/main.js` in the `loaders` array at the top of the file. With each loader being an individual object in this array with `name`, `colour`, `html`, `css`, `scss` keys that contain the loader's information. 

```javascript
{
  name: 'Loader name',
  colour: 'Loader hex code used for the background on the example page',
  html: `Loader HTML with formatting preserved via template literals`,
  css: `Loader CSS with formatting preserved via template literals`,
  scss: `Loader SCSS with formatting preserved via template literals`
}
```

The scss source code for each loader can be found within `src/scss/loaders` in individual named and numbered files following the x_name.scss format. Each loader scss file is imported into main.scss via `@import 'loaders/x_name'`;

## Example Page

The example page shows each loading animation with their respective HTML, SCSS, and CSS code. This page uses plain JS to create a basic slider that allows for the navigation between each loader as well as showing the loaders code based on the currently selected language tab. The colour key within each loader object within the `loaders` array is used as the background colour for the loading animation, a function is also used to generate darker shades of that colour for use as the button background colours in the code tabs.

## Gulp tasks
- Watch: Use browsersync to reload files and compiles pug, scss.
- Build: Complies PUG, SCSS and builds files from SRC to DIST, including compressing images, JS, CSS

## TODO:
- Add more loaders
- Make background colours to have a more consistent palette
- Improve mobile styling especially on landscape to be more user friendly with more spacing between elements.

## Dependencies
Gulp - for workflow automation icnluding scss, pug compiling, building from src to dist
Prism - for code highlighting

## Contributions

Improvements to the examples page are welcome and so are new loaders.
To contribute please fork and send a pull request, to request a feature or report bugs please open an issue.

#### New Loader Contribution

1. The HTML, CSS, SCSS for each loader should be included into a loader object into `main.js` according to the format in the Loader Code section.
2. The SCSS for each loader should also be included as a seperate scss file into `src/scss/loaders` with the following name format `x_name.scss`. Try to use SCSS variables where possible so that each loading animation can be easily scaled and modified.
3. This SCSS file should then be imported in main.scss via `@import 'loaders/x_name';` below the existing loader imports.
