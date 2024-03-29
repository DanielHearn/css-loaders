const squareLoader = {
  name: 'Square',
  key: 'square',
  link: 'https://codepen.io/danhearn/pen/YWNGYR',
  color: '#d74b48',
  code: {
    html: `<div class='squareLoader'>
  <div class='squareLoader__square'></div>
  <div class='squareLoader__square'></div>
  <div class='squareLoader__square'></div>
  <div class='squareLoader__square'></div>
</div>`,
    css: `.squareLoader {
    max-width: 4em;
}
.squareLoader .squareLoader__square {
  height: 2em;
  width: 2em;
  background-color: white;
  float: right;
  animation: squareLoaderAnim 3s infinite;
}
.squareLoader .squareLoader__square:nth-child(1) {
  float: left;
}
.squareLoader .squareLoader__square:nth-child(1) {
  animation-delay: 0.3s;
}
.squareLoader .squareLoader__square:nth-child(2) {
  animation-delay: 0.6s;
}
.squareLoader .squareLoader__square:nth-child(3) {
  animation-delay: 0.9s;
}
.squareLoader .squareLoader__square:nth-child(4) {
  animation-delay: 1.2s;
}
  
@keyframes squareLoaderAnim {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}`,
    scss: `$squareTiming: 0.3s;
$squareSize: 4em;

.squareLoader {
  max-width: $squareSize;
  &__square {
    height: $squareSize/2;
    width: $squareSize/2;
    background-color: white;
    float: right;
    animation: squareLoaderAnim 3s infinite; 
    &:nth-child(1) {
      float: left; }
    @for $i from 1 to 5 {
      &:nth-child(#{$i}) {
        animation-delay: $squareTiming*$i;
      }
    }
  }
}
@keyframes squareLoaderAnim {
  0% {opacity: 1;}
  40% {opacity: 0;}
  50% {opacity: 0;}
  90% {opacity: 1;}
  100% {opacity: 1;}
}`
  }
}

export default squareLoader