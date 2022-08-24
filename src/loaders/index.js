// @flow

import square_loader from './individual/square'
import hearbeat_loader from './individual/heartbeat'
import slider_loader from './individual/slider'
import hollow_box_loader from './individual/hollow_box'
import pulse_loader from './individual/pulse'
import bar_loader from './individual/bar'
import bar_with_border from './individual/bar_wiith_border'
import two_circles_loader from './individual/two_circles'
import single_orbit_loader from './individual/single_orbit'
import dual_orbit_loader from './individual/dual_orbit'
import vertical_loader from './individual/vertical'
import three_dot_loader from './individual/three_dot'
import cube_to_circle_loader from './individual/cube_to_circle'

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

export type Loader = {
  name: string,
  color: string,
  code: {
    html: string,
    css: string,
    scss: string
  }
}

const loaders: Array<Loader> = [
  square_loader,
  hearbeat_loader,
  slider_loader,
  hollow_box_loader,
  pulse_loader,
  bar_loader,
  bar_with_border,
  two_circles_loader,
  single_orbit_loader,
  dual_orbit_loader,
  vertical_loader,
  three_dot_loader,
  cube_to_circle_loader
]


export default loaders;