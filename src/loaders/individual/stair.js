const stairLoader = {
  name: 'Stair',
  key: 'stair',
  link: 'https://codepen.io/danhearn/pen/oNQVdVd',
  color: '#4c89a9',
  code: {
    html: `<div class='stairLoader'>
  <div class='stairLoader__line'></div>
  <div class='stairLoader__line'></div>
  <div class='stairLoader__line'></div>
</div>`,
    css: `.stairLoader {
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.stairLoader__line {
  background: white;
  display: inline-block;
  height: 15px;
  width: 100%;
  margin: 3.75px;
  animation: stairLoaderAnim 1.5s linear infinite;
}
.stairLoader__line:nth-child(1) {
  animation-delay: 0.15s;
}
.stairLoader__line:nth-child(2) {
  animation-delay: 0.3s;
}
.stairLoader__line:nth-child(3) {
  animation-delay: 0.45s;
}

@keyframes stairLoaderAnim {
  0% {
    transform: 0;
  }
  25% {
    transform: translate(-30px);
  }
  50% {
    transform: 0;
  }
  75% {
    transform: translate(30px);
  }
  100% {
    transform: 0;
  }
}`,
    scss: `$stairLoaderSize: 60px;

.stairLoader {
  width: $stairLoaderSize;
  height: $stairLoaderSize;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__line {
    background: white;
    display: inline-block;
    height: $stairLoaderSize / 4;
    width: 100%;
    margin: $stairLoaderSize / 16;
    animation: stairLoaderAnim 1.5s linear infinite;
    &:nth-child(1) {
      animation-delay: 0.15s;
    }
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.45s;
    }
  }
}

@keyframes stairLoaderAnim {
  0% {
    transform: 0;
  }
  25% {
    transform: translate(-$stairLoaderSize / 2);
  }
  50% {
    transform: 0
  }
  75% {
    transform: translate($stairLoaderSize / 2);
  }
  100% {
    transform: 0
  }
}`,
  },
}
export default stairLoader
