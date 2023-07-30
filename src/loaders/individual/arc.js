const arcLoader = {
  name: 'Arc',
  key: 'arc',
  link: 'https://codepen.io/danhearn/pen/vYQQoWw',
  color: '#714eaf',
  code: {
    html: `<div class='arcLoader'>
  <div class='arcLoader__arc'></div>
</div>`,
    css: `.arcLoader {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arcLoader__arc {
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

@keyframes arcLoaderAnim {
  100% {
    transform: rotate(360deg);
  }
}`,
    scss: `$arcLoaderSize: 60px;

.arcLoader {
  width: $arcLoaderSize;
  height: $arcLoaderSize;
  display: flex;
  align-items: center;
  justify-content: center;
  &__arc {
    border: $arcLoaderSize / 10 solid white;
    border-bottom-color: transparent;
    border-left-color: transparent; 
    display: inline-block;
    min-width: $arcLoaderSize / 4;
    min-height: $arcLoaderSize / 4;
    padding: $arcLoaderSize / 8;
    border-radius: 100%;
    border-bottom-color: transparent; 
    animation: arcLoaderAnim 1.6s linear infinite;
  }
}

@keyframes arcLoaderAnim {
  100% {
    transform: rotate(360deg);
  }
}`,
  },
}
export default arcLoader
