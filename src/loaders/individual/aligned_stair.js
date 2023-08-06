const stairLoader = {
  name: 'Aligned Stair',
  key: 'aligned_stair',
  link: 'https://codepen.io/danhearn/pen/MWzRYQw',
  color: '#8c4ca9',
  code: {
    html: `<div class='alignedStairLoader'>
  <div class='alignedStairLoader__line'></div>
  <div class='alignedStairLoader__line'></div>
  <div class='alignedStairLoader__line'></div>
</div>
`,
    css: `.alignedStairLoader {
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.alignedStairLoader__line {
  background: white;
  display: inline-block;
  height: 15px;
  width: 100%;
  margin: 3.75px;
  animation: alignedStairLoaderSizeAnim 5s linear infinite;
}
.alignedStairLoader__line:nth-child(1) {
  animation-delay: 0s;
}
.alignedStairLoader__line:nth-child(2) {
  animation-delay: 0.4s;
}
.alignedStairLoader__line:nth-child(3) {
  animation-delay: 0.8s;
}

@keyframes alignedStairLoaderSizeAnim {
  0% {
    transform: 0;
  }
  16.666% {
    transform: translate(-40px);
  }
  33.333% {
    transform: translate(-40px);
  }
  66.666% {
    transform: translate(40px);
  }
  83.333% {
    transform: translate(40px);
  }
  100% {
    transform: 0;
  }
}`,
    scss: `$alignedStairLoaderSize: 60px;

.alignedStairLoader {
  width: $alignedStairLoaderSize;
  height: $alignedStairLoaderSize;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__line {
    background: white;
    display: inline-block;
    height: $alignedStairLoaderSize / 4;
    width: 100%;
    margin: $alignedStairLoaderSize / 16;
    animation: alignedStairLoaderSizeAnim 5s linear infinite;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      animation-delay: 0.8s;
    }
  }
}

@keyframes alignedStairLoaderSizeAnim {
  0% {
    transform: 0;
  }
  16.666% {
    transform: translate(-$alignedStairLoaderSize / 1.5);
  }
  33.333% {
    transform: translate(-$alignedStairLoaderSize / 1.5);
  }
  66.666% {
    transform: translate($alignedStairLoaderSize / 1.5);
  }
  83.333% {
    transform: translate($alignedStairLoaderSize / 1.5);
  }
  100% {
    transform: 0
  }
}`,
  },
}
export default stairLoader
