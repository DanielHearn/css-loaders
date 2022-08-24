const cubeToCircleLoader = {
  name: 'Cube to Circle',
  key: 'cube_to_circle',
  color: '#d74b48',
  code: {
    html: `<div class='cubeToCircleLoader'>
  <div class='cubeToCircleLoader__cube'></div>
  <div class='cubeToCircleLoader__cube'></div>
  <div class='cubeToCircleLoader__cube'></div>
  <div class='cubeToCircleLoader__cube'></div>
</div>`,
    css: `.cubeToCircleLoader {
  width: 100px;
  height: 100px;
  transform: rotate(-45deg);
}
.cubeToCircleLoader .cubeToCircleLoader__cube {
  height: 20px;
  width: 20px;
  margin: 15px;
  background-color: #FEFEFE;
  float: right;
  animation: anim 2.5s infinite;
}
.cubeToCircleLoader .cubeToCircleLoader__cube:nth-child(1) {
  animation-name: cubeToCircleLoaderAnim1, cubeToCircleLoaderAnim;
}
@keyframes cubeToCircleLoaderAnim1 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-50px, 0);
  }
}
.cubeToCircleLoader .cubeToCircleLoader__cube:nth-child(2) {
  animation-name: cubeToCircleLoaderAnim2, cubeToCircleLoaderAnim;
}
@keyframes cubeToCircleLoaderAnim2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 50px);
  }
}
.cubeToCircleLoader .cubeToCircleLoader__cube:nth-child(3) {
  animation-name: cubeToCircleLoaderAnim3, cubeToCircleLoaderAnim;
}
@keyframes cubeToCircleLoaderAnim3 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -50px);
  }
}
.cubeToCircleLoader .cubeToCircleLoader__cube:nth-child(4) {
  animation-name: cubeToCircleLoaderAnim4, cubeToCircleLoaderAnim;
}
@keyframes cubeToCircleLoaderAnim4 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 0);
  }
}

@keyframes cubeToCircleLoaderAnim {
  0% {
    border-radius: 0px;
  }
  40% {
    border-radius: 40px;
  }
  60% {
    border-radius: 40px;
  }
  100% {
    border-radius: 0px;
  }
}`,
      scss: `$cubeToCircleLoaderAnimXPositions: -50px, 0, 0, 50px;
$cubeToCircleLoaderAnimYPositions: 0, 50px, -50px, 0;
$cubeToCircleLoaderAnimCubeSize: 20px;

.cubeToCircleLoader {
  width: 100px;
  height: 100px;
  transform: rotate(-45deg);
  &__cube {
    height: $cubeToCircleLoaderAnimCubeSize;
    width: $cubeToCircleLoaderAnimCubeSize;
    margin: 15px;
    background-color: #FEFEFE;
    float: right;
    animation: cubeToCircleLoaderAnim 2.5s infinite;
    @for $i from 0 to 4 {
      &:nth-child(#{$i+1}) {
        animation-name: cubeToCircleLoaderAnim#{$i+1}, cubeToCircleLoaderAnim;
      }
      @at-root {
        @keyframes cubeToCircleLoaderAnim#{$i+1} {
          0% {transform: translate(0, 0);}
          100% {transform: translate(nth($cubeToCircleLoaderAnimXPositions,$i+1),nth($cubeToCircleLoaderAnimYPositions,$i+1)); }
        }
      }
    }
  }
}

@keyframes cubeToCircleLoaderAnim {
  0% {border-radius: 0px;}
  40% {border-radius: $cubeToCircleLoaderAnimCubeSize;}
  60% {border-radius: $cubeToCircleLoaderAnimCubeSize;}
  100% {border-radius: 0px;}
}`
  }
}
export default cubeToCircleLoader