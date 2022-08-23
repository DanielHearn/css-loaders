const threeDotLoader = {
  name: 'Three Dot',
  color: '#34bd84',
  code: {
    html: `<div class="threeDotLoader">
    <div class="threeDotLoader__dot"></div>
    <div class="threeDotLoader__dot"></div>
    <div class="threeDotLoader__dot"></div>
  </div>`,
    css: `.threeDotLoader {
  margin: 0 auto;
  width: 5.6em;
}
.threeDotLoader .threeDotLoader__dot {
  width: 1.4em;
  height: 1.4em;
  border-radius: 1.4em;
  background-color: white;
  transform: scale(0);
  display: inline-block;
  animation: threedotloaderanim 1.6s infinite ease-in-out;
}
.threeDotLoader .threeDotLoader__dot:nth-child(1) {
  animation-delay: 0s;
}
.threeDotLoader .threeDotLoader__dot:nth-child(2) {
  animation-delay: 0.25s;
}
.threeDotLoader .threeDotLoader__dot:nth-child(3) {
  animation-delay: 0.5s;
}
.threeDotLoader .threeDotLoader__dot:nth-child(4) {
  animation-delay: 0.75s;
}

@keyframes threedotloaderanim {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  90% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}`,
      scss: `$threeDotLoaderSize: 1.4em;
$threeDotLoaderAnimDelay: 0.25s;

.threedotloader {
  margin: 0 auto;
  width: $threeDotLoaderSize*4;
  .dot {
    width: $threeDotLoaderSize;
    height: $threeDotLoaderSize;
    border-radius: $threeDotLoaderSize;
    background-color: white;
    transform: scale(0);
    display: inline-block;
    animation: threedotloaderanim 1.6s infinite ease-in-out;
    @for $i from 0 to 4 {
      &:nth-child(#{$i+1}) {
        animation-delay: $threeDotLoaderAnimDelay*$i;
      }
    }
  }
}
  
@keyframes threedotloaderanim {
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  90% { transform: scale(0); }
  100% { transform: scale(0); }
}`
  }
}
export default threeDotLoader