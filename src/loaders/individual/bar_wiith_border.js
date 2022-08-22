const barWithBorderLoader = {
  name: 'Bar with Border',
  color: '#4c4ea9',
  code: {
    html: `<div class="barWithBorderLoader">
  <div class="bar"></div>
</div>`,
    css: `.barWithBorderLoader {
  width: 10em;
  border: 0.25em solid #fefefe;
}
.barWithBorderLoader .bar {
  width: 100%;
  opacity: 0;
  height: 1.5em;
  background: #fefefe;
  animation: barwithborderanim 2.5s infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
  transform-origin: 0% 50%;
}
@keyframes barwithborderanim {
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

.barWithBorderLoader {
  width: $barMaxWidth;
  border: 0.25em solid $barColor;
  .bar {
    width: 100%;
    opacity: 0;
    height: $barHeight;
    background: $barColor;
    animation: barwithborderanim $barTiming infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
    transform-origin: 0% 50%;
  }
}
@keyframes barwithborderanim {
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