const loader = {
  name: 'Rounded Bar',
  key: 'rounded_bar',
  link: 'https://codepen.io/danhearn/pen/oNJzvBw',
  color: '#54dea0',
  code: {
    html: `<div class="roundedBarLoader">
  <div class="roundedBarLoader__bar"></div>
</div>`,
    css: `.roundedBarLoader {
  width: 10em;
  border: 0.25em solid #fefefe;
  border-radius: 16px;
  overflow: hidden;
}
.roundedBarLoader__bar {
  width: 104%;
  height: 104%;
  left: -2%;
  opacity: 0;
  height: 1.5em;
  background: #fefefe;
  animation: roundedBarLoaderAnim 2.5s infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
  transform-origin: 0% 50%;
}

@keyframes roundedBarLoaderAnim {
  0%, 5% {
    transform: scaleX(0);
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  95% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
}`,
    scss: `$roundedBarLoaderTiming: 2.5s;
$roundedBarLoaderHeight: 1.5em;
$roundedBarLoaderMaxWidth: 10em;
$roundedBarLoaderColor: #fefefe;

.roundedBarLoader {
  width: $roundedBarLoaderMaxWidth;
  border: 0.25em solid $roundedBarLoaderColor;
  border-radius: 16px;
  overflow: hidden;
  &__bar{
    width: 104%;
    height: 104%;
    left: -2%;
    opacity: 0;
    height: $roundedBarLoaderHeight;
    background: $roundedBarLoaderColor;
    animation: roundedBarLoaderAnim $roundedBarLoaderTiming infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
    transform-origin: 0% 50%;
  }
}

@keyframes roundedBarLoaderAnim {
  0%, 5% {
    transform: scaleX(0);
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  95% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
}`,
  },
}
export default loader
