const doubleArcLoader = {
  name: 'Double Arc',
  key: 'double_arc',
  link: 'https://codepen.io/danhearn/pen/BaGGXJo',
  color: '#4c4ea9',
  code: {
    html: `<div class='doubleArcLoader'>
  <div class='doubleArcLoader__arc'></div>
  <div class='doubleArcLoader__arc doubleArcLoader__arc--large'></div>
</div>`,
    css: `.doubleArcLoader {
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.doubleArcLoader__arc {
  position: absolute;
  border: 6px solid white;
  border-bottom-color: transparent;
  border-left-color: transparent;
  display: inline-block;
  min-width: 15px;
  min-height: 15px;
  padding: 7.5px;
  border-radius: 100%;
  border-bottom-color: transparent;
  animation: arcLoaderAnim 1.6s linear infinite;
}
.doubleArcLoader__arc--large {
  min-width: 34.2857142857px;
  min-height: 34.2857142857px;
  padding: 10px;
  animation: doubleArcLoaderLargeAnim 2.1s linear infinite;
}

@keyframes doubleArcLoaderAnim {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes doubleArcLoaderLargeAnim {
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}`,
    scss: `$doubleArcLoaderSize: 60px;
    
.doubleArcLoader {
  width: $doubleArcLoaderSize;
  height: $doubleArcLoaderSize;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &__arc {
    position: absolute;
    border: $doubleArcLoaderSize / 10 solid white;
    border-bottom-color: transparent;
    border-left-color: transparent; 
    display: inline-block;
    min-width: $doubleArcLoaderSize / 4;
    min-height: $doubleArcLoaderSize / 4;
    padding: $doubleArcLoaderSize / 8;
    border-radius: 100%;
    border-bottom-color: transparent; 
    animation: arcLoaderAnim 1.6s linear infinite;
    &--large {
      min-width: $doubleArcLoaderSize / 1.75;
      min-height: $doubleArcLoaderSize / 1.75;
      padding: $doubleArcLoaderSize / 6;
      animation: arcLoaderLargeAnim 2.1s linear infinite;
    }
  }
}

@keyframes doubleArcLoaderAnim {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes doubleArcLoaderLargeAnim {
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}`,
  },
}
export default doubleArcLoader
