const verticalLoader = {
  name: 'Vertical',
  key: 'vertical',
  link: 'https://codepen.io/danhearn/pen/xrqpqY',
  color: '#4a79cf',
  code: {
    html: `<div class="verticalLoader"></div>`,
    css: `.verticalLoader {
  margin: 0 auto;
  width: 1.5em;
  height: 1.5em;
  border-radius: 1.5em;
  background-color: white;
  animation: verticalloaderanim 1s ease-in-out infinite;
  outline: 1px solid transparent;
}

@keyframes verticalloaderanim {
  0% {
    transform: translate(0, -2.5em);
  }
  50% {
    transform: translate(0, 2.5em);
  }
  100% {
    transform: translate(0, -2.5em);
  }
}`,
      scss: `$verticalLoaderSize: 1.5em;

.verticalLoader {
  margin: 0 auto;
  width: $verticalLoaderSize;
  height: $verticalLoaderSize;
  border-radius: $verticalLoaderSize;
  background-color: white;
  animation: verticalloaderanim 1s ease-in-out infinite;
  outline: 1px solid transparent;
}

@keyframes verticalloaderanim {
  0% {transform: translate(0, -2.5em);}
  50% {transform: translate(0, 2.5em);}
  100% {transform: translate(0, -2.5em);}
}`
  }
}
export default verticalLoader