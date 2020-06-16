export default {
  name: 'Hollow Box',
  color: '#22958b',
  code: {
    html: `<div class="hollowLoader">
            <div class="largeBox"></div>
            <div class="smallBox"></div>
          </div>`,
    css: `.hollowLoader {
    width: 3em;
    height: 3em;
    -webkit-animation: loaderAnim 1.25s infinite ease-in-out;
          animation: loaderAnim 1.25s infinite ease-in-out;
    outline: 1px solid transparent;
    }
    .hollowLoader .largeBox {
     height: 3em;
    width: 3em;
    background-color: #ECECEC;
    outline: 1px solid transparent;
    position: fixed;
    }
    .hollowLoader .smallBox {
    height: 3em;
    width: 3em;
    background-color: #22958b; //Change to colour of background
    position: fixed;
    z-index: 1;
    outline: 1px solid transparent;
    -webkit-animation: smallBoxAnim 1.25s alternate infinite ease-in-out;
          animation: smallBoxAnim 1.25s alternate infinite ease-in-out;
    }
    @-webkit-keyframes smallBoxAnim {
    0% {
      -webkit-transform: scale(0.2);
          transform: scale(0.2);
    }
    100% {
      -webkit-transform: scale(0.75);
          transform: scale(0.75);
    }
    }
    @keyframes smallBoxAnim {
    0% {
      -webkit-transform: scale(0.2);
          transform: scale(0.2);
    }
    100% {
      -webkit-transform: scale(0.75);
          transform: scale(0.75);
    }
    }
    @-webkit-keyframes loaderAnim {
    0% {
      -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
    }
    }
    @keyframes loaderAnim {
    0% {
      -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
    }
    }`,
      scss: `$hollowBoxSize: 3em;
    $hollowLight: #ECECEC;
    $hollowDark: #34495e;
    $hollowTiming: 1.25s;
    .hollowLoader {
    width: $hollowBoxSize;
    height: $hollowBoxSize;
    animation: loaderAnim $hollowTiming infinite ease-in-out;
    outline: 1px solid transparent;
    .largeBox {
      height: $hollowBoxSize;
      width: $hollowBoxSize;
      background-color: $hollowLight;
      outline: 1px solid transparent;
      position: fixed;
    }
    .smallBox {
      height: $hollowBoxSize;
      width: $hollowBoxSize;
      background-color: $hollowDark;
      position: fixed;
      z-index: 1;
      outline: 1px solid transparent;
      animation: smallBoxAnim $hollowTiming alternate infinite ease-in-out;
    }
    }
    @keyframes smallBoxAnim {
    0% {transform: scale(0.2);}
    100% {transform: scale(0.75);}
    }
    @keyframes loaderAnim {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(90deg);}
    }`
  }
}