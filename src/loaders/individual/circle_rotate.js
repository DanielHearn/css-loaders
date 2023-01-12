const cubeToCircleLoader = {
  name: 'Circle Rotate',
  key: 'circle_rotate',
  link: 'https://codepen.io/danhearn/pen/OJwmjwz',
  color: '#9f3755',
  code: {
    html: `<div class='circleRotateLoader'>
  <div class='circleRotateLoader__cube'></div>
  <div class='circleRotateLoader__cube'></div>
  <div class='circleRotateLoader__cube'></div>
  <div class='circleRotateLoader__cube'></div>
</div>`,
    css: `.circleRotateLoader {
  width: 100px;
  height: 100px;
  transform: rotate(0deg);
  animation: circleRotateLoaderAnim 1.5s infinite;
}
.circleRotateLoader__cube {
  height: 20px;
  width: 20px;
  margin: 15px;
  background-color: #ECECEC;
  float: right;
  border-radius: 50%;
}

@keyframes circleRotateLoaderAnim {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(90deg);
  }
}`,
      scss: `$circleRotateLoaderCubeSize: 20px;

.circleRotateLoader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  transform: rotate(0deg);
  animation: circleRotateLoaderAnim 1.6s infinite;
  &__cube {
    height: $circleRotateLoaderCubeSize;
    width: $circleRotateLoaderCubeSize;
    margin: 15px;
    background-color: #ECECEC;
    float: right;
    border-radius: 50%;
  }
}

@keyframes circleRotateLoaderAnim {
  0% {transform: rotate(0deg)}
  90% {transform: rotate(90deg)}
  100% {transform: rotate(90deg)}
} `
  }
}
export default cubeToCircleLoader