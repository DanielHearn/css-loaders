const barLoader = {
  name: 'Bar',
  color: '#e6653c',
  code: {
    html: `<div class="barLoader">
  <div class="barLoader__bar"></div>
</div>`,
    css: `.barLoader {
  width: 10em;
}
.barLoader .barLoader__bar {
  width: 100%;
  opacity: 0;
  height: 1.5em;
  background: #fefefe;
  animation: barLoaderAnim 2.5s infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
  transform-origin: 0% 50%;
}
@keyframes barLoaderAnim {
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
      scss: `$barLoaderTiming: 2.5s;
$barLoaderHeight: 1.5em;
$barLoaderMaxWidth: 10em;
$barLoaderColor: #fefefe;

.barLoader {
  width: $barLoaderMaxWidth;
  &__bar {
    width: 100%;
    opacity: 0;
    height: $barLoaderHeight;
    background: $barLoaderColor;
    animation: barLoaderAnim $barLoaderTiming infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
    transform-origin: 0% 50%;
  }
}
@keyframes barLoaderAnim {
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
export default barLoader