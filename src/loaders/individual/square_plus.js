const loader = {
  name: 'Square Plus',
  key: 'square_plus',
  link: 'https://codepen.io/danhearn/pen/ZEVbXxr',
  color: '#cf4a70',
  code: {
    html: `<div class='squarePlusLoader'>
  <div class='squarePlus'></div>
  <div class='squarePlus'></div>
  <div class='squarePlus'></div>
  <div class='squarePlus'></div>
</div>`,
    css: `.squarePlusLoader {
  max-width: 6em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.squarePlusLoader .squarePlus {
  display: flex;
  height: 2em;
  width: 2em;
  background-color: white;
  transform: translate3d(0, 0, 0);
  -webkit-animation: squareplusanim 3s infinite;
          animation: squareplusanim 3s infinite;
  opacity: 0.25;
}
.squarePlusLoader .squarePlus:nth-child(1) {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.squarePlusLoader .squarePlus:nth-child(2) {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}
.squarePlusLoader .squarePlus:nth-child(3) {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
.squarePlusLoader .squarePlus:nth-child(4) {
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
.squarePlusLoader .squarePlus:nth-child(1) {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
}
.squarePlusLoader .squarePlus:nth-child(2) {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
}
.squarePlusLoader .squarePlus:nth-child(3) {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
}
.squarePlusLoader .squarePlus:nth-child(4) {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;
}

@-webkit-keyframes squareplusanim {
  0% {
    opacity: 0.25;
  }
  40% {
    opacity: 1;
  }
  45% {
    opacity: 1;
  }
  90% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}

@keyframes squareplusanim {
  0% {
    opacity: 0.25;
  }
  40% {
    opacity: 1;
  }
  45% {
    opacity: 1;
  }
  90% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}`,
    scss: `$squarePlusLoaderSize: 6em;

.squarePlusLoader {
  max-width: $squarePlusLoaderSize;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  .squarePlus {
    display: flex;
    height: $squarePlusLoaderSize/3;
    width: $squarePlusLoaderSize/3;
    background-color: white;
    transform: translate3d(0, 0, 0);
    animation: squareplusanim 3s infinite; 
    opacity: 0.25;
    @for $i from 1 to 5 {
      &:nth-child(#{$i}) {
        animation-delay: 0.3s*$i;
      }
    }
    &:nth-child(1) {
      grid-column-start: 2;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 1;
    }
    &:nth-child(2) {
      grid-column-start: 3;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 2;
    }
    &:nth-child(3) {
      grid-column-start: 2;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 3;
    }
    &:nth-child(4) {
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  }
}

@keyframes squareplusanim {
  0% {opacity: 0.25;}
  40% {opacity: 1;}
  45% {opacity: 1;}
  90% {opacity: 0.25;}
  100% {opacity: 0.25;}
}`,
  },
}
export default loader
