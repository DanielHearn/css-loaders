import type {Loader} from './../'

const sliderLoader: Loader = {
  name: 'Slider',
  color: '#714eaf',
  code: {
    html: `<div class='sliderLoader'>
  <div class='rect'></div>
  <div class='rect'></div>
  <div class='rect'></div>
  <div class='rect'></div>
  <div class='rect'></div>
</div>
        `,
    css: `.sliderLoader {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sliderLoader .rect {
  height: 20px;
  width: 8px;
  background-color: white;
  display: inline-block;
  animation: slideranim 1.4s ease-in-out infinite;
  margin-right: 4px;
}
.sliderLoader .rect:nth-child(1) {
  animation-delay: 0.15s;
}
.sliderLoader .rect:nth-child(2) {
  animation-delay: 0.3s;
}
.sliderLoader .rect:nth-child(3) {
  animation-delay: 0.45s;
}
.sliderLoader .rect:nth-child(4) {
  animation-delay: 0.6s;
}
.sliderLoader .rect:nth-child(5) {
  animation-delay: 0.75s;
}
@keyframes slideranim {
  0% {
    transform: scaleY(1);
  }
  25% {
    transform: scaleY(3);
  }
  50% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}`,
      scss: `$sliderTiming: 1.4s;
$sliderRectTiming: 0.15s;
$sliderRectHeight: 20px;
$sliderRectWidth: 8px;

.sliderLoader {
  display: flex;
  justify-content: center;
  align-items: center;
  .rect {
    height: $sliderRectHeight;
    width: $sliderRectWidth;
    background-color: white;
    display: inline-block;
    animation: slideranim $sliderTiming ease-in-out infinite;
    margin-right: 4px;
    @for $i from 1 to 6 {
      &:nth-child(#{$i}) {
        animation-delay: $sliderRectTiming*$i;
      }
    }
  }
}
@keyframes slideranim {
  0% {
    transform: scaleY(1);
  }
  25% {
    transform: scaleY(3);
  }
  50% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}`
  }
}

export default sliderLoader