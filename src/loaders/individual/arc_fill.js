const loader = {
  name: 'Arc Fill',
  key: 'arc_fill',
  link: 'https://codepen.io/danhearn/pen/qBLamNq',
  color: '#4eaeaf',
  code: {
    html: `<div class='arcFillLoader'>
  <div class='arcFillLoader__arc'></div>
  <div class='arcFillLoader__background'></div>
  <div class='arcFillLoader__background arcFillLoader__background--2'></div>
</div>`,
    css: `.arcFillLoader {
  width: 60px;
  height: 60px;
  position: relative;
}
.arcFillLoader__arc {
  position: absolute;
  top: 0;
  left: 0;
  border: 6px solid white;
  border-bottom-color: transparent;
  border-left-color: transparent;
  display: inline-block;
  min-width: 15px;
  min-height: 15px;
  padding: 7.5px;
  border-radius: 100%;
  border-bottom-color: transparent;
  animation: arcFillLoaderAnim 1.6s linear infinite;
  z-index: 10;
}
.arcFillLoader__background {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  border: 6px solid white;
  border-bottom-color: transparent;
  border-left-color: transparent;
  display: inline-block;
  min-width: 15px;
  min-height: 15px;
  padding: 7.5px;
  border-radius: 100%;
  border-bottom-color: transparent;
}
.arcFillLoader__background--2 {
  transform: rotate(180deg);
}

@keyframes arcFillLoaderAnim {
  100% {
    transform: rotate(360deg);
  }
}`,
    scss: `$arcFillLoaderSize: 60px;

.arcFillLoader {
  width: $arcFillLoaderSize;
  height: $arcFillLoaderSize;
  position: relative;
  &__arc {
    position: absolute;
    top: 0;
    left: 0;
    border: $arcFillLoaderSize / 10 solid white;
    border-bottom-color: transparent;
    border-left-color: transparent; 
    display: inline-block;
    min-width: $arcFillLoaderSize / 4;
    min-height: $arcFillLoaderSize / 4;
    padding: $arcFillLoaderSize / 8;
    border-radius: 100%;
    border-bottom-color: transparent; 
    animation: arcFillLoaderAnim 1.6s linear infinite;
    z-index: 10;
  }
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
    border: $arcFillLoaderSize / 10 solid white;
    border-bottom-color: transparent;
    border-left-color: transparent; 
    display: inline-block;
    min-width: $arcFillLoaderSize / 4;
    min-height: $arcFillLoaderSize / 4;
    padding: $arcFillLoaderSize / 8;
    border-radius: 100%;
    border-bottom-color: transparent;
    &--2 {
      transform: rotate(180deg);
    }
  }
}

@keyframes arcFillLoaderAnim {
  100% {
    transform: rotate(360deg);
  }
}`,
  },
}
export default loader
