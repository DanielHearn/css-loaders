const loaders = [
    { 
        name: 'Loader 1',
        html: `
    <div class="pulseLoader">
        <div class="pulse"></div>
        <div class="pulse"></div>
    </div>
        `,
        css: `
    .cheese {
        display: flex;hh
    }
        `
    },
    { 
        name: 'Loader 2',
        html: `
    <div class="pulseLoader">
        <div class="pulse"></div>
        <div class="pulse"></div>
    </div>
        `,
        css: `
    .cheese {
        display: flex;gffgfdg
    }
        `
    },
    { 
        name: 'Loader 3',
        html: `
    <div class="pulseLoader">
        <div class="pulse"></div>
        <div class="pulse"></div>
    </div>
        `,
        css: `
    .cheese {
        display: flex;fdfgfgdgfgd
    }
        `
    }
]

const sliderContainer = document.querySelector('.jsSeimaSlider')
const htmlElement = document.querySelector('#html-code')
const cssElement = document.querySelector('#css-code')
const prevButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')

let loaderIndex = 0
let autoPlayIntervalID = null
let dragIntervalID = null

prevButton.addEventListener('click', function() { 
    changeLoader(-1)
})
nextButton.addEventListener('click', function() { 
    changeLoader(1)
})

const slider = new Siema({
    selector: sliderContainer,
    duration: 1000,
    easing: 'ease-out',
    threshold: 50,
    loop: true,
    onChange: sliderAutoPlay,
    onInit: sliderAutoPlay
  })
  
prevButton.addEventListener('click', () => slider.prev())
nextButton.addEventListener('click', () => slider.next())
sliderContainer.addEventListener('mousedown', dragInterval, false)
sliderContainer.addEventListener('mouseup', () => clearDragInterval())

function sliderAutoPlay () {
    clearSliderAutoPlay()
    autoPlayIntervalID = setInterval(() => slider.next(), 5000)
}
function clearSliderAutoPlay () {
    clearInterval(autoPlayIntervalID)
}
function dragInterval (e) {
    clearSliderAutoPlay()
    clearDragInterval()
    dragIntervalID = setInterval(() => dragInterval(e), 200)
}
function clearDragInterval () {
    clearInterval(dragIntervalID)
}

function loadSliders() {
    for(loader of loaders) {
        loadSlide(loader)
    }
}

function loadSlide(loader){
    const slideElement = document.createElement('div')
    slideElement.classList.add('slider-item')
    const slideName = document.createElement('h1')
    slideName.textContent = loader.name 
    const animationWrapper = document.createElement('div')
    animationWrapper.classList.add('animation-wrapper')
    animationWrapper.innerHTML = loader.html
    const sourceElement = document.createElement('a')
    sourceElement.textContent = 'View Source'
    

}

function changeLoader(indexChange) {    
    console.log(indexChange);
    
    const newIndex = loaderIndex += indexChange
    if(newIndex < 0) {
        loaderIndex = loaders.length-1
    } else if(newIndex > loaders.length-1) {
        loaderIndex = 0
    } else {
        loaderIndex = newIndex
    }
    showLoader(loaderIndex)
}

function showLoader(index) {
    const loader = loaders[index]
    //set name
    //setAnimationElement(loader)
    showLoaderCode(loader)
}

function setAnimationElement(animElement, loader) {
    animElement.innerHTML = loader.html
}

function showLoaderCode(loader) {
    setHtmlElement(loader.html)
    setCssElement(loader.css)
}

function setHtmlElement(code) {
    htmlElement.textContent = code
}

function setCssElement(code) {
    cssElement.textContent = code
}
showLoader(0)