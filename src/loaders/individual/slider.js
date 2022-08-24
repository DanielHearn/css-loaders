const sliderLoader = {
  name: 'Slider',
  key: 'slider',
  color: '#714eaf',
  code: {
    html: `<div class='sliderLoader'>
  <div class='sliderLoader__rect'></div>
  <div class='sliderLoader__rect'></div>
  <div class='sliderLoader__rect'></div>
  <div class='sliderLoader__rect'></div>
  <div class='sliderLoader__rect'></div>
</div>
        `,
    css: `.sliderLoader {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sliderLoader .sliderLoader__rect {
  height: 20px;
  width: 8px;
  background-color: white;
  display: inline-block;
  animation: sliderLoaderAnim 1.4s ease-in-out infinite;
  margin-right: 4px;
}
.sliderLoader .sliderLoader__rect:nth-child(1) {
  animation-delay: 0.15s;
}
.sliderLoader .sliderLoader__rect:nth-child(2) {
  animation-delay: 0.3s;
}
.sliderLoader .sliderLoader__rect:nth-child(3) {
  animation-delay: 0.45s;
}
.sliderLoader .sliderLoader__rect:nth-child(4) {
  animation-delay: 0.6s;
}
.sliderLoader .sliderLoader__rect:nth-child(5) {
  animation-delay: 0.75s;
}
@keyframes sliderLoaderAnim {
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
      scss: `$sliderLoaderTiming: 1.4s;
$sliderLoaderRectTiming: 0.15s;
$sliderLoaderRectHeight: 20px;
$sliderLoaderRectWidth: 8px;

.sliderLoader {
  display: flex;
  justify-content: center;
  align-items: center;
  &__rect {
    height: $sliderLoaderRectHeight;
    width: $sliderLoaderRectWidth;
    background-color: white;
    display: inline-block;
    animation: sliderLoaderAnim $sliderLoaderTiming ease-in-out infinite;
    margin-right: 4px;
    @for $i from 1 to 6 {
      &:nth-child(#{$i}) {
        animation-delay: $sliderLoaderRectTiming*$i;
      }
    }
  }
}
@keyframes sliderLoaderAnim {
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