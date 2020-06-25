import square_loader from './individual/square'
import hearbeat_loader from './individual/heartbeat'
import slider_loader from './individual/slider'
import hollow_box_loader from './individual/hollow_box'
import pulse_loader from './individual/pulse'
import bar_loader from './individual/bar'
import two_circles_loader from './individual/two_circles'

// Formatting for css loader objects
/* {
  name: 'NAME',
  colour: 'HEX COLOUR',
  code: {
    html: `HTML`,
    css: `CSS`,
    scss: `SCSS`
  }
} */

const loaders = [
  square_loader,
  hearbeat_loader,
  slider_loader,
  hollow_box_loader,
  pulse_loader,
  bar_loader,
  two_circles_loader
]

export default loaders;