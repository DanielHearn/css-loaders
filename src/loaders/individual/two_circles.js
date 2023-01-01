const twoCirclesLoader = {
  name: 'Two Circles',
  key: 'two_circles',
  link: 'https://codepen.io/danhearn/pen/wMbVeV',
  color: '#221d2a',
  code: {
    html: `<div class="twoCircleLoader">
  <div class="twoCircleLoader__circle"></div>
  <div class="twoCircleLoader__circle"></div>
</div>
      `,
  css: `.twoCircleLoader {
  width: 4em;
  height: 4em;
  position: relative;
}
.twoCircleLoader .twoCircleLoader__circle {
  width: 4em;
  height: 4em;
  border-radius: 4em;
  position: absolute;
  animation: twoCircleLoaderAnim 3s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}
.twoCircleLoader .twoCircleLoader__circle:nth-child(1) {
  background-color: #f1c40f;
  transform: scale(0);
  animation-delay: 1.5s;
}
.twoCircleLoader .twoCircleLoader__circle:nth-child(2) {
  background-color: #de4e40;
}
@keyframes twoCircleLoaderAnim {
  0% {
    transform: scale(0);
  }
  46% {
    transform: scale(1);
  }
  54% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}`,
  scss: `$twoCircleLoaderSize: 4em;
$twoCircleLoaderTiming: 3s;
$twoCircleLoaderColour1: #f1c40f;
$twoCircleLoaderColour2: #de4e40;

.twoCircleLoader {
  width: $twoCircleLoaderSize;
  height: $twoCircleLoaderSize;
  &__circle {
    width: $twoCircleLoaderSize;
    height: $twoCircleLoaderSize;
    border-radius: $twoCircleLoaderSize;
    position: absolute;
    animation: twoCircleLoaderAnim $twoCircleLoaderTiming infinite cubic-bezier(0.65, 0.05, 0.36, 1);
    &:nth-child(1) {
      background-color: $twoCircleLoaderColour1;
      transform: scale(0);
      animation-delay: $twoCircleLoaderTiming/2;
    }
    &:nth-child(2) {
      background-color: $twoCircleLoaderColour2;
    }
  }
}
@keyframes twoCircleLoaderAnim {
  0% {
    transform: scale(0);
  }
  46% {
    transform: scale(1);
  }
  54% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}`
  }
}

export default twoCirclesLoader