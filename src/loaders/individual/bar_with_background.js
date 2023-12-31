const barLoader = {
  name: 'Bar With Background',
  key: 'bar_with_background',
  link: 'https://codepen.io/danhearn/pen/abMvNqV',
  color: '#3cb4e6',
  code: {
    html: `<div class="barWithBackgroundLoader">
  <div class="barWithBackgroundLoader__bar"></div>
  <div class="barWithBackgroundLoader__barbackground"></div>
</div>`,
    css: `.barWithBackgroundLoader {
  width: 10em;
  position: relative;
}
.barWithBackgroundLoader__bar {
  position: absolute;
  width: 100%;
  opacity: 0;
  height: 1.5em;
  background: #fefefe;
  animation: barWithBackgroundLoaderAnim 2.5s infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
  transform-origin: 0% 50%;
}
.barWithBackgroundLoader__barbackground {
  position: absolute;
  width: 100%;
  height: 1.5em;
  background: #fefefe;
  opacity: 0.3;
}

@keyframes barWithBackgroundLoaderAnim {
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
    scss: `$barWithBackgroundAnimTiming: 2.5s;
$barWithBackgroundAnimHeight: 1.5em;
$barWithBackgroundAnimMaxWidth: 10em;
$barWithBackgroundAnimColor: #fefefe;

.barWithBackgroundLoader {
  width: $barWithBackgroundAnimMaxWidth;
  position: relative;
  &__bar{
    position: absolute;
    width: 100%;
    opacity: 0;
    height: $barWithBackgroundAnimHeight;
    background: $barWithBackgroundAnimColor;
    animation: barWithBackgroundLoaderAnim $barWithBackgroundAnimTiming infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
    transform-origin: 0% 50%;
  }
  &__barbackground{
    position: absolute;
    width: 100%;
    height: $barWithBackgroundAnimHeight;
    background: $barWithBackgroundAnimColor;
    opacity: 0.3;
  }
}

@keyframes barWithBackgroundLoaderAnim {
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
export default barLoader
