const loaders = [
  {
    name: '1: Square',
    colour: '#de4e40',
    html:
`<div class='squareLoader'>
    <div class='square'></div>
    <div class='square'></div>
    <div class='square'></div>
    <div class='square'></div>
</div>`,
    css:
`.squareLoader {
  max-width: 4em;
}
.squareLoader .square {
  height: 2em;
  width: 2em;
  background-color: white;
  float: right;
  animation: squareanim 3s infinite;
}
.squareLoader .square:nth-child(1) {
  float: left;
}
.squareLoader .square:nth-child(1) {
  animation-delay: 0.3s;
}
.squareLoader .square:nth-child(2) {
  animation-delay: 0.6s;
}
.squareLoader .square:nth-child(3) {
  animation-delay: 0.9s;
}
.squareLoader .square:nth-child(4) {
  animation-delay: 1.2s;
}
  
@keyframes squareanim {
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
    scss:
`$squareTiming: 0.3s;
$squareSize: 4em;

.squareLoader {
  max-width: $squareSize;
  .square {
    height: $squareSize/2;
    width: $squareSize/2;
    background-color: white;
    float: right;
    animation: squareanim 3s infinite; 
    &:nth-child(1) {
      float: left; }
    @for $i from 1 to 5 {
      &:nth-child(#{$i}) {
        animation-delay: $squareTiming*$i;
      }
    }
  }
}

@keyframes squareanim {
  0% {opacity: 1;}
  40% {opacity: 0;}
  50% {opacity: 0;}
  90% {opacity: 1;}
  100% {opacity: 1;}
}`
  },
  {
    name: '2: Heartbeat',
    colour: '#25a78d',
    html:
`<div class="heartbeatLoader">
    <div class="pulse"></div>
    <div class="pulse"></div>
</div>`,
    css:
`.heartbeatLoader {
  width: 4em;
  height: 4em;
}
.heartbeatLoader .pulse {
  width: 4em;
  height: 4em;
  border-radius: 50%;
  position: absolute;
  background-color: white;
  animation: heartbeatanim 1.2s ease-in-out infinite;
  transform: scale(0);
  outline: 1px solid transparent;
}
.heartbeatLoader .pulse:nth-child(2) {
  animation-delay: 0.22s;
}
  
@keyframes heartbeatanim {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}`,
    scss:
`$heartbeatSize: 4em;
$heartbeatTiming: 1.2s;

.heartbeatLoader {
  width: $heartbeatSize;
  height: $heartbeatSize;
  .pulse {
    width: $heartbeatSize;
    height: $heartbeatSize;
    border-radius: 50%;
    position: absolute;
    background-color: white;
    animation: heartbeatanim $heartbeatTiming ease-in-out infinite;
    transform: scale(0);
    outline: 1px solid transparent;
    &:nth-child(2) {
      animation-delay: 0.22s;
    }
  }
}

@keyframes heartbeatanim {
  0% { transform: scale(0);}
  100% { transform: scale(1); opacity: 0;}
}`
  },
  {
    name: '3: Slider',
    colour: '#9b59b6',
    html:
`<div class='sliderLoader'>
    <div class='rect'></div>
    <div class='rect'></div>
    <div class='rect'></div>
    <div class='rect'></div>
    <div class='rect'></div>
</div>
        `,
    css:
`.sliderLoader {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sliderLoader .rect {
  height: 20px;
  width: 8px;
  background-color: white;
  display: inline-block;
  animation: slideranim 1.4s ease-in-out infinite;
  margin-right: 4px;
}
.sliderLoader .rect:nth-child(1) {
  animation-delay: 0.15s;
}
.sliderLoader .rect:nth-child(2) {
  animation-delay: 0.3s;
}
.sliderLoader .rect:nth-child(3) {
  animation-delay: 0.45s;
}
.sliderLoader .rect:nth-child(4) {
  animation-delay: 0.6s;
}
.sliderLoader .rect:nth-child(5) {
  animation-delay: 0.75s;
}

@keyframes slideranim {
  0% {
    transform: scaleY(1);
  }
  25% {
    transform: scaleY(3);
  }
  50% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}`,
    scss:
`$sliderTiming: 1.4s;
$sliderRectTiming: 0.15s;
$sliderRectHeight: 20px;
$sliderRectWidth: 8px;

.sliderLoader {
    display: flex;
    justify-content: center;
    align-items: center;
    .rect {
      height: $sliderRectHeight;
      width: $sliderRectWidth;
      background-color: white;
      display: inline-block;
      animation: slideranim $sliderTiming ease-in-out infinite;
      margin-right: 4px;
      @for $i from 1 to 6 {
        &:nth-child(#{$i}) {
          animation-delay: $sliderRectTiming*$i;
        }
      }
    }
}

@keyframes slideranim {
  0% {transform: scaleY(1);}
  25% {transform: scaleY(3);}
  50% {transform: scaleY(1);}
  100% {transform: scaleY(1);}
}`
  },
  {
    name: '4: Hollow Box',
    colour: '#34495e',
    html:
`<div class="hollowLoader">
  <div class="largeBox"></div>
  <div class="smallBox"></div>
</div>`,
    css:
`.hollowLoader {
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
  background-color: #34495e;
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
    scss:
`$hollowBoxSize: 3em;
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
  },
  {
    name: '5: Pulse',
    colour: '#a03b74',
    html:
`<div class='pulseLoader'></div>
        `,
    css:
`.pulseLoader {
  width: 4em;
  height: 4em;
  border-radius: 4em;
  background-color: white;
  outline: 1px solid transparent;
  animation: pulseanim 1.2s ease-in-out infinite;
}
  
@keyframes pulseanim {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}`,
    scss:
`$pulseSize: 4em;
$pulseTiming: 1.2s;

.pulseLoader {
  width: $pulseSize;
  height: $pulseSize;
  border-radius: $pulseSize;
  background-color: white;
  outline: 1px solid transparent;
  animation: pulseanim $pulseTiming ease-in-out infinite;
}

@keyframes pulseanim {
  0% { transform: scale(0);}
  100% { transform: scale(1); opacity: 0;}
}`
  },
  {
    name: '6: Two Circles',
    colour: '#323d4a',
    html:
`<div class='twoCircleLoader'>
    <div class='circle'></div>
    <div class='circle'></div>
</div>
        `,
    css:
`.twoCircleLoader {
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
    scss:
`$twoCircleSize: 4em;
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
  },
  {
    name: '7: Bar',
    colour: '#4548c3',
    html:
`<div class="barLoader">
  <div class="bar"></div>
</div>`,
    css:
`.barLoader {
  width: 100em;
  max-width: 10em;
}
.barLoader .bar {
  width: 100%;
  opacity: 0;
  height: 1.5em;
  background: #fefefe;
  animation: baranim 2.5s infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
  transform-origin: 0% 50%;
}

@keyframes baranim {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  5% {
    transform: scaleX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  95% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
}`,
    scss:
`$barTiming: 2.5s;
$barHeight: 1.5em;
$barMaxWidth: 10em;
$barColor: #fefefe;

.barLoader {
  width: 100em;
  max-width: $barMaxWidth;
  .bar {
    width: 100%;
    opacity: 0;
    height: $barHeight;
    background: $barColor;
    animation: baranim $barTiming infinite cubic-bezier(0.61, 0.33, 0.39, 0.79);
    transform-origin: 0% 50%;
  }
}

@keyframes baranim {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  5% {
    transform: scaleX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  95% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
}`
  }
]

// Formatting for css loader objects
/* {
  name: 'NUM: Name',
  colour: 'HEX COLOUR',
  html: `HTML`,
  css: `CSS`,
  scss: `SCSS`
} */

const root = document.documentElement.style
const loaderContainer = document.querySelector('#loader-container')
const loaderContent = loaderContainer.querySelector('#loader-content #loader')
const loaderName = loaderContainer.querySelector('#loader-name h2')
const loaderSource = loaderContainer.querySelector('#loader-source')
const prevButton = loaderContainer.querySelector('#prevButton')
const nextButton = loaderContainer.querySelector('#nextButton')
const htmlElement = document.querySelector('#html-code')
const cssElement = document.querySelector('#css-code')
const scssElement = document.querySelector('#scss-code')
const htmlButton = document.querySelector('#html .copy')
const cssButton = document.querySelector('#css .copy')
const scssButton = document.querySelector('#scss .copy')
const displayCodeButton = document.querySelector('#displayCodeButton')

const codeContainer = document.querySelector('#code-container')
const tabContainer = codeContainer.querySelector('.tabs')
const tabs = tabContainer.querySelectorAll('.tab')
const contentContainer = codeContainer.querySelector('.code')
const contents = contentContainer.querySelectorAll('.code-element')

const dotContainer = document.querySelector('#loader-dots')

const swipeDistance = 50

let dots = []
let loaderIndex = 0

prevButton.addEventListener('click', function () {
  changeLoader(-1)
})
nextButton.addEventListener('click', function () {
  changeLoader(1)
})

htmlButton.addEventListener('click', function () {
  copyToClipboard(htmlElement)
})

cssButton.addEventListener('click', function () {
  copyToClipboard(cssElement)
})

scssButton.addEventListener('click', function () {
  copyToClipboard(scssElement)
})

displayCodeButton.addEventListener('click', function () {
  toggleCodeSection()
})

tabContainer.addEventListener('click', toggleTab)

dotContainer.addEventListener('click', toggleDot)

document.addEventListener('DOMContentLoaded', function () {
  loadApp()
})

function loadApp () {
  showLoader(0)
  createDots()
  createMobileSwipe()
}

function createMobileSwipe () {
  if ('ontouchstart' in window) {
    let startX = 0
    loaderContainer.ontouchstart = function (e) {
      startX = e.changedTouches[0].pageX
    }
    loaderContainer.ontouchmove = function (e) {
      e.preventDefault()
    }
    loaderContainer.ontouchend = function (e) {
      const touchobj = e.changedTouches[0]
      const distX = touchobj.pageX - startX
      // swipe right
      distX < -swipeDistance && changeLoader(1)
      // swipe left
      distX > swipeDistance && changeLoader(-1)
    }
  }
}

function loadSlide (loader) {
  root.setProperty('--accent', loader.colour)
  root.setProperty('--accent-dark', shadeColor(loader.colour, -0.2))
  root.setProperty('--accent-darkish', shadeColor(loader.colour, -0.1))
  loaderName.textContent = loader.name
  const animationWrapper = document.createElement('div')
  animationWrapper.id = 'animation-wrapper'
  animationWrapper.innerHTML = loader.html
  loaderSource.href = 'https://www.github.com/danielhearn/css-loaders'
  loaderContent.appendChild(animationWrapper)
}

function changeLoader (indexChange) {
  const newIndex = loaderIndex += indexChange
  if (newIndex < 0) {
    loaderIndex = loaders.length - 1
  } else if (newIndex > loaders.length - 1) {
    loaderIndex = 0
  } else {
    loaderIndex = newIndex
  }
  showLoader(loaderIndex)
  selectDot(loaderIndex)
}

function showLoader (index) {
  const loader = loaders[index]
  loaderContent.innerHTML = ''
  loadSlide(loader)
  showLoaderCode(loader)
}

function showLoaderCode (loader) {
  setHtmlElement(loader.html)
  setCssElement(loader.css)
  setScssElement(loader.scss)
}

function setHtmlElement (code) {
  htmlElement.textContent = code
  htmlElement.parentElement.scrollTop = 0
  Prism.highlightElement(htmlElement)
}

function setCssElement (code) {
  cssElement.textContent = code
  cssElement.parentElement.scrollTop = 0
  Prism.highlightElement(cssElement)
}

function setScssElement (code) {
  scssElement.textContent = code
  scssElement.parentElement.scrollTop = 0
  Prism.highlightElement(scssElement)
}

function toggleCodeSection () {
  codeContainer.classList.toggle('visible')
  loaderContainer.classList.toggle('code-visible')
  console.log(displayCodeButton.textContent)
  if (codeContainer.classList.contains('visible')) {
    displayCodeButton.textContent = 'Hide Code'
  } else {
    displayCodeButton.textContent = 'Show Code'
  }
}

function toggleTab (e) {
  e.preventDefault()
  const tabLink = e.target.closest('a')
  const tab = tabLink.parentNode
  const tabHref = tabLink.getAttribute('href')
  const content = contentContainer.querySelector(tabHref)

  tabs.forEach(tab => tab.classList.remove('selected'))
  contents.forEach(content => content.classList.remove('selected'))

  tab.classList.add('selected')
  content.classList.add('selected')
}

function createDots () {
  for (const dot in loaders) {
    const dotElement = document.createElement('a')
    dotElement.classList.add('loader-dot')
    dotElement.href = dot
    if (dot == 0) {
      dotElement.classList.add('selected')
    }
    dotContainer.appendChild(dotElement)
    dots[dots.length] = dotElement
  }
}

function selectDot (dotIndex) {
  dots.forEach(dot => dot.classList.remove('selected'))
  dots[dotIndex].classList.add('selected')
  loaderIndex = dotIndex
  showLoader(dotIndex)
}

function toggleDot (e) {
  e.preventDefault()
  if (dots) {
    const currentDot = e.target.closest('a')
    if (currentDot) {
      const dotHref = currentDot.getAttribute('href')
      selectDot(parseInt(dotHref))
    }
  }
}

// Function from https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
function copyToClipboard (element) {
  const el = document.createElement('textarea') // Create a <textarea> element
  el.value = element.textContent // Set its value to the string that you want copied
  el.setAttribute('readonly', '') // Make it readonly to be tamper-proof
  el.style.position = 'absolute'
  el.style.left = '-9999px' // Move outside the screen to make it invisible
  document.body.appendChild(el) // Append the <textarea> element to the HTML document
  const selected =
      document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false // Mark as false to know no selection existed before
  el.select() // Select the <textarea> content
  document.execCommand('copy') // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el) // Remove the <textarea> element
  if (selected) { // If a selection existed before copying
    document.getSelection().removeAllRanges() // Unselect everything on the HTML document
    document.getSelection().addRange(selected) // Restore the original selection
  }
}

// Function from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeColor (color, percent) {
  let f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF
  return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1)
}
