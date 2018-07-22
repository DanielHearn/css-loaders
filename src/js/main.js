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
`.loader {
    width: 3em;
    height: 3em;
    animation: loaderAnim 1.25s infinite ease-in-out;
    outline: 1px solid transparent;
}
.loader .largeBox {
    height: 3em;
    width: 3em;
    background-color: #ECECEC;
    outline: 1px solid transparent;
    position: fixed;
}
.loader .smallBox {
    height: 3em;
    width: 3em;
    background-color: #34495e;
    position: fixed;
    z-index: 1;
    outline: 1px solid transparent;
    animation: smallBoxAnim 1.25s alternate infinite ease-in-out;
}
    
@keyframes smallBoxAnim {
    0% {
        transform: scale(0.2);
    }
    100% {
        transform: scale(0.75);
    }
}

@keyframes loaderAnim {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(90deg);
    }
}`,
    scss:
`$squareTiming: 0.3s;

.squareLoader {
    max-width: 60px;
    .square {
        height: 30px;
        width: 30px;
        background-color: white;
        float: right;
        animation: squareanim 3s infinite; 
        &:nth-child(1) {
            float: left; 
        }
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
`<div class="pulseLoader">
    <div class="pulse"></div>
    <div class="pulse"></div>
</div>`,
    css:
`.pulseLoader {
    width: 4em;
    height: 4em;
}
.pulseLoader .pulse {
    width: 4em;
    height: 4em;
    border-radius: 4em;
    position: absolute;
    background-color: white;
    animation: pulseanim 1.2s ease-in-out infinite;
     transform: scale(0);
    outline: 1px solid transparent;
}
.pulseLoader .pulse:nth-child(2) {
    animation-delay: 0.22s;
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
`$heartbeatSize: 4em;
$heartbeatTiming: 1.2s;

.pulseLoader {
    width: $heartbeatSize;
    height: $heartbeatSize;
    .pulse {
        width: $heartbeatSize;
        height: $heartbeatSize;
        border-radius: $heartbeatSize;
        position: absolute;
        background-color: white;
        animation: heartbeatanim heartbeatTiming ease-in-out infinite;
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
    name: '3: Rectangle',
    colour: '#9b59b6',
    html:
`<div class='sliderloader'>
        <div class='rect'></div>
        <div class='rect'></div>
        <div class='rect'></div>
        <div class='rect'></div>
        <div class='rect'></div>
    </div>
        `,
    css:
`.sliderloader {
    padding-top: 40vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sliderloader .rect {
    height: 20px;
    width: 8px;
    background-color: #FFF;
    display: inline-block;
    animation: slideranim 1.4s ease-in-out infinite;
    margin-right: 4px;
}
.sliderloader .rect:nth-child(1) {
    animation-delay: 0.15s;
    }
.sliderloader .rect:nth-child(2) {
    animation-delay: 0.3s;
    }
.sliderloader .rect:nth-child(3) {
    animation-delay: 0.45s;
}
.sliderloader .rect:nth-child(4) {
    animation-delay: 0.6s;
}
.sliderloader .rect:nth-child(5) {
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
`$rectangleTiming: 0.15s;

.sliderloader {
    display: flex;
    justify-content: center;
    align-items: center;
    .rect {
        height: 20px;
        width: 8px;
        background-color: #FFF;
        display: inline-block;
        animation: slideranim 1.4s ease-in-out infinite;
        margin-right: 4px;
        @for $i from 1 to 6 {
        &:nth-child(#{$i}) {
            animation-delay: $rectangleTiming*$i;
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
`<div class="loader">
    <div class="largeBox"></div>
    <div class="smallBox"></div>
</div>
        `,
    css:
`.loader {
    width: 3em;
    height: 3em;
    animation: loaderAnim 1.25s infinite ease-in-out;
    outline: 1px solid transparent;
}
.loader .largeBox {
    height: 3em;
    width: 3em;
    background-color: #ECECEC;
    outline: 1px solid transparent;
    position: fixed;
}
.loader .smallBox {
    height: 3em;
    width: 3em;
    background-color: #34495e;
    position: fixed;
    z-index: 1;
    outline: 1px solid transparent;
    animation: smallBoxAnim 1.25s alternate infinite ease-in-out;
}
  
@keyframes smallBoxAnim {
    0% {
      transform: scale(0.2);
    }
    100% {
      transform: scale(0.75);
    }
}
@keyframes loaderAnim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
}`,
    scss:
`$cubeSize: 3em;
$light: #ECECEC;
$dark: #34495e;

.loader {
    width: $cubeSize;
    height: $cubeSize;
    animation: hollowboxAnim 1.25s infinite ease-in-out;
    outline: 1px solid transparent;
    .largeBox {
        height: $cubeSize;
        width: $cubeSize;
        background-color: $light;
        outline: 1px solid transparent;
        position: fixed;
    }
    .smallBox {
        height: $cubeSize;
        width: $cubeSize;
        background-color: $dark;
        position: fixed;
        z-index: 1;
        outline: 1px solid transparent;
        animation: smallBoxAnim 1.25s alternate infinite ease-in-out;
    }
}
    
@keyframes smallBoxAnim {
    0% {transform: scale(0.2);}
    100% {transform: scale(0.75);}
}
    
@keyframes hollowboxAnim {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(90deg);}
}`
  },
  {
    name: '5: Pulse',
    colour: '#CB6651',
    html:
`<div class='pulse'></div>
        `,
    css:
`.pulse {
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

.pulse {
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
    margin: 0 auto;
    width: 60px;
    height: 60px;
    .circle {
      width: 60px;
      height: 60px;
      border-radius: 60px;
      position: absolute;
      animation: load 3s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
      &:nth-child(1) {
        background-color: #f1c40f;
        transform: scale(0);
        animation-delay: 1.5s;
      }
      &:nth-child(2) {
        background-color: #de4e40;
      }
   }
}

@keyframes load {
  0% { transform: scale(0); }
  46% { transform: scale(1); }
  54% { transform: scale(1); }
  100% { transform: scale(0); }
}`,
    scss:
`.twoCircleLoader {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    .circle {
      width: 60px;
      height: 60px;
      border-radius: 60px;
      position: absolute;
      animation: load 3s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
      &:nth-child(1) {
        background-color: #f1c40f;
        transform: scale(0);
        animation-delay: 1.5s;
      }
      &:nth-child(2) {
        background-color: #de4e40;
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
]

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

const tabbedComponent = document.querySelector('#code-container')
const tabContainer = tabbedComponent.querySelector('.tabs')
const tabs = tabContainer.querySelectorAll('.tab')
const contentContainer = tabbedComponent.querySelector('.code')
const contents = contentContainer.querySelectorAll('.code-element')

const dotContainer = document.querySelector('#loader-dots')

let dots = []
let loaderIndex = 0

prevButton.addEventListener('click', function () {
  changeLoader(-1)
})
nextButton.addEventListener('click', function () {
  changeLoader(1)
})

htmlButton.addEventListener('click', function() {
  copyToClipboard(htmlElement)
})

cssButton.addEventListener('click', function() {
  copyToClipboard(cssElement)
})

scssButton.addEventListener('click', function() {
  copyToClipboard(scssElement)
})
  
tabContainer.addEventListener('click', toggleTab)

dotContainer.addEventListener('click', toggleDot)

document.addEventListener('DOMContentLoaded', function() {
  loadApp()
})

function loadApp () {
  showLoader(0)
  createDots()
}

function loadSlide (loader) {
  root.setProperty('--accent', loader.colour)
  root.setProperty('--accent-dark', shadeColor(loader.colour,-0.2))
  root.setProperty('--accent-darkish', shadeColor(loader.colour,-0.1))
  loaderName.textContent = loader.name
  const animationWrapper = document.createElement('div')
  animationWrapper.id = 'animation-wrapper'
  animationWrapper.innerHTML = loader.html
  const sourceElement = document.createElement('a')
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
      if(dot == 0) {
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
  if(dots) {
    const currentDot = e.target.closest('a')
    if(currentDot) {
        const dotHref = currentDot.getAttribute('href')
        selectDot(parseInt(dotHref))
    }
  }
}

//Function from https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
function copyToClipboard(element) {
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = element.textContent;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =            
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }
}

// Function from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeColor(color, percent) {   
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}
