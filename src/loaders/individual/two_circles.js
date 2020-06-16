export default  {
  name: 'Two Circles',
  color: '#263238',
  code: {
    html: `<div class='twoCircleLoader'>
  <div class='circle'></div>
  <div class='circle'></div>
</div>
      `,
  css: `.twoCircleLoader {
width: 4em;
height: 4em;
}
.twoCircleLoader .circle {
width: 4em;
height: 4em;
border-radius: 4em;
position: absolute;
animation: load 3s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}
.twoCircleLoader .circle:nth-child(1) {
background-color: #f1c40f;
transform: scale(0);
animation-delay: 1.5s;
}
.twoCircleLoader .circle:nth-child(2) {
background-color: #de4e40;
}
@keyframes load {
0% {
  transform: scale(0);
}
46% {
  transform: scale(1);
}
54% {
  transform: scale(1);
}
100% {
  transform: scale(0);
}
}`,
  scss: `$twoCircleSize: 4em;
$twoCircleTiming: 3s;
$twoCircleColour1: #f1c40f;
$twoCircleColour2: #de4e40;
.twoCircleLoader {
  width: $twoCircleSize;
  height: $twoCircleSize;
  .circle {
    width: $twoCircleSize;
    height: $twoCircleSize;
    border-radius: $twoCircleSize;
    position: absolute;
    animation: load $twoCircleTiming infinite cubic-bezier(0.65, 0.05, 0.36, 1);
    &:nth-child(1) {
      background-color: $twoCircleColour1;
      transform: scale(0);
      animation-delay: $twoCircleTiming/2;
    }
    &:nth-child(2) {
      background-color: $twoCircleColour2;
    }
 }
}
@keyframes load {
0% { transform: scale(0); }
46% { transform: scale(1); }
54% { transform: scale(1); }
100% { transform: scale(0); }
}`
  }
}