const barWithBorderLoader = {
  name: 'Bar with Border',
  key: 'bar_with_border',
  link: 'https://codepen.io/danhearn/pen/ZExPaqM',
  color: '#4c4ea9',
  code: {
    html: `<div class="barWithBorderLoader">
  <div class="barWithBorderLoader__bar"></div>
</div>`,
css: `.barWithBorderLoader {
  width: 10em;
  border: 0.25em solid #fefefe;
}
.barWithBorderLoader .barWithBorderLoader__bar {
  width: 100%;
  opacity: 0;
  height: 1.5em;
  background: #fefefe;
  animation: barWithBorderLoaderAnim 2.5s infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
  transform-origin: 0% 50%;
}
@keyframes barWithBorderLoaderAnim {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  5% {
    transform: scaleX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
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
      scss: `$barWithBorderLoaderTiming: 2.5s;
$barWithBorderLoaderHeight: 1.5em;
$barWithBorderLoaderMaxWidth: 10em;
$barWithBorderLoaderColor: #fefefe;

.barWithBorderLoader {
  width: $barWithBorderLoaderMaxWidth;
  border: 0.25em solid $barColor;
  &__bar {
    width: 100%;
    opacity: 0;
    height: $barWithBorderLoaderHeight;
    background: $barWithBorderLoaderColor;
    animation: barWithBorderLoaderAnim $barWithBorderLoaderTiming infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
    transform-origin: 0% 50%;
  }
}
@keyframes barWithBorderLoaderAnim {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  5% {
    transform: scaleX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  95% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
}`
  }
}
export default barWithBorderLoader