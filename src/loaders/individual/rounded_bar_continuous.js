const loader = {
  name: 'Rounded Bar Continuous',
  key: 'rounded_bar_continuous',
  link: 'https://codepen.io/danhearn/pen/eYbdOvp',
  color: '#dec154',
  code: {
    html: `<div class="roundedBarContinuousLoader">
  <div class="roundedBarContinuousLoader__bar"></div>
  <div class="roundedBarContinuousLoader__bar"></div>
  <div class="roundedBarContinuousLoader__bar"></div>
</div>`,
    css: `.roundedBarContinuousLoader {
  width: 10em;
  border: 0.25em solid #fefefe;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  height: 1.5em;
}
.roundedBarContinuousLoader .roundedBarContinuousLoader__bar {
  position: absolute;
  top: 0;
  left: -3em;
  width: 25%;
  height: 104%;
  height: 1.5em;
  background: #fefefe;
  animation: roundedBarContinuousLoaderAnim 1.75s infinite linear;
  transform-origin: 0% 50%;
}
.roundedBarContinuousLoader .roundedBarContinuousLoader__bar:nth-child(1) {
  animation-delay: 0.5833333333s;
}
.roundedBarContinuousLoader .roundedBarContinuousLoader__bar:nth-child(2) {
  animation-delay: 1.1666666667s;
}

@keyframes roundedBarContinuousLoaderAnim {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(13.5em);
  }
}`,
    scss: `$roundedBarContinuousLoaderTiming: 1.75s;
$roundedBarContinuousLoaderHeight: 1.5em;
$roundedBarContinuousLoaderMaxWidth: 10em;
$roundedBarContinuousLoaderColor: #fefefe;

.roundedBarContinuousLoader {
  width: $roundedBarContinuousLoaderMaxWidth;
  border: 0.25em solid $roundedBarContinuousLoaderColor;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  height: $roundedBarContinuousLoaderHeight;
  .roundedBarContinuousLoader__bar{
    position: absolute;
    top: 0;
    left: -($roundedBarContinuousLoaderMaxWidth * 0.30);
    width: 25%;
    height: 104%;
    height: $roundedBarContinuousLoaderHeight;
    background: $roundedBarContinuousLoaderColor;
    animation: roundedBarContinuousLoaderAnim $roundedBarContinuousLoaderTiming infinite linear;
    transform-origin: 0% 50%;
    &:nth-child(1) {
      animation-delay: $roundedBarContinuousLoaderTiming / 3;
    }
    &:nth-child(2) {
      animation-delay: ($roundedBarContinuousLoaderTiming / 3) * 2;
    }
  }
}

@keyframes roundedBarContinuousLoaderAnim {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX($roundedBarContinuousLoaderMaxWidth * 1.35);
  }
}`,
  },
}
export default loader
