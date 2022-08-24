const hollowBoxLoader = {
  name: 'Hollow Box',
  color: '#22958b',
  code: {
    html: `<div class="hollowLoader">
  <div class="hollowLoader__largeBox"></div>
  <div class="hollowLoader__smallBox"></div>
</div>`,
    css: `.hollowLoader {
  width: 3em;
  height: 3em;
  animation: hollowBoxLoaderAnim 1.25s infinite ease-in-out;
  outline: 1px solid transparent;
}
.hollowLoader .hollowLoader__largeBox {
  height: 3em;
  width: 3em;
  background-color: #ECECEC;
  outline: 1px solid transparent;
  position: fixed;
}
.hollowLoader .hollowLoader__smallBox {
  height: 3em;
  width: 3em;
  background-color: #22958b; //Change to colour of background
  position: fixed;
  z-index: 1;
  outline: 1px solid transparent;
  animation: hollowBoxLoaderSmallBoxAnim 1.25s alternate infinite ease-in-out;
}
@keyframes hollowBoxLoaderSmallBoxAnim {
  0% {
    -webkit-transform: scale(0.2);
    transform: scale(0.2);
  }
  100% {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
}
@keyframes hollowBoxLoaderAnim {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}`,
      scss: `$hollowBoxLoaderSize: 3em;
$hollowBoxLoaderLight: #ECECEC;
$hollowBoxLoaderDark: #34495e;
$hollowBoxLoaderTiming: 1.25s;

.hollowLoader {
  width: $hollowBoxLoaderSize;
  height: $hollowBoxLoaderSize;
  animation: hollowBoxLoaderAnim $hollowBoxLoaderDark infinite ease-in-out;
  outline: 1px solid transparent;
  &__largeBox {
    height: $hollowBoxLoaderSize;
    width: $hollowBoxLoaderSize;
    background-color: $hollowBoxLoaderLight;
    outline: 1px solid transparent;
    position: fixed;
  }
  &__smallBox {
    height: $hollowBoxLoaderSize;
    width: $hollowBoxLoaderSize;
    background-color: $hollhollowBoxLoaderDarkowDark;
    position: fixed;
    z-index: 1;
    outline: 1px solid transparent;
    animation: hollowBoxLoaderSmallBoxAnim $hollowBoxLoaderDark alternate infinite ease-in-out;
  }
}
@keyframes hollowBoxLoaderSmallBoxAnim {
  0% {transform: scale(0.2);}
  100% {transform: scale(0.75);}
}
@keyframes hollowBoxLoaderAnim {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(90deg);}
}`
  }
}

export default hollowBoxLoader