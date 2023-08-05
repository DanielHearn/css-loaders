const arcCircleLoader = {
  name: 'Arc Circle',
  key: 'arc_circle',
  link: 'https://codepen.io/danhearn/pen/oNQVdVd',
  color: '#4ca98b',
  code: {
    html: `<div class='arcCircleLoader'>
  <div class='arcCircleLoader__arc'></div>
  <div class='arcCircleLoader__circle'></div>
</div>`,
    css: `.arcCircleLoader {
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arcCircleLoader__arc {
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
  animation: arcCircleLoaderAnim 1.6s linear infinite;
}
.arcCircleLoader__circle {
  position: absolute;
  border-radius: 50%;
  background: white;
  width: 20px;
  height: 20px;
}

@keyframes arcCircleLoaderAnim {
  100% {
    transform: rotate(360deg);
  }
}`,
    scss: `$arcCircleLoaderSize: 60px;

.arcCircleLoader {
  width: $arcCircleLoaderSize;
  height: $arcCircleLoaderSize;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &__arc {
    position: absolute;
    border: $arcCircleLoaderSize / 10 solid white;
    border-bottom-color: transparent;
    border-left-color: transparent; 
    display: inline-block;
    min-width: $arcCircleLoaderSize / 4;
    min-height: $arcCircleLoaderSize / 4;
    padding: $arcCircleLoaderSize / 8;
    border-radius: 100%;
    border-bottom-color: transparent; 
    animation: arcCircleLoaderAnim 1.6s linear infinite;
  }
  &__circle { 
    position: absolute;
    border-radius: 50%;
    background: white;
    width: $arcCircleLoaderSize / 3;
    height: $arcCircleLoaderSize / 3;
  }
}

@keyframes arcCircleLoaderAnim {
  100% {
    transform: rotate(360deg);
  }
}`,
  },
}
export default arcCircleLoader
