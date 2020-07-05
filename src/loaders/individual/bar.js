const barLoader = {
  name: 'Bar',
  color: '#e6653c',
  code: {
    html: `<div class="barLoader">
  <div class="bar"></div>
</div>`,
    css: `.barLoader {
  width: 10em;
}
.barLoader .bar {
  width: 100%;
  opacity: 0;
  height: 1.5em;
  background: #fefefe;
  animation: baranim 2.5s infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
  transform-origin: 0% 50%;
}
@keyframes baranim {
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
      scss: `$barTiming: 2.5s;
$barHeight: 1.5em;
$barMaxWidth: 10em;
$barColor: #fefefe;

.barLoader {
  width: $barMaxWidth;
  .bar {
    width: 100%;
    opacity: 0;
    height: $barHeight;
    background: $barColor;
    animation: baranim $barTiming infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
    transform-origin: 0% 50%;
  }
}
@keyframes baranim {
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