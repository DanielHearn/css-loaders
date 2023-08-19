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
import circle_rotate_loader from './individual/circle_rotate'
import arc_loader from './individual/arc'
import double_arc_loader from './individual/double_arc'
import arc_circle_loader from './individual/arc_circle'
import stair_loader from './individual/stair'
import aligned_stair_loader from './individual/aligned_stair'
import image_loader from './individual/image'

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
    scss: string,
  },
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
  cube_to_circle_loader,
  circle_rotate_loader,
  arc_loader,
  arc_circle_loader,
  double_arc_loader,
  stair_loader,
  aligned_stair_loader,
  image_loader,
]

export default loaders
