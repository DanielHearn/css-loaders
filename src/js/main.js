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
                display: flex;
            }
        `
    }
]

const animElement = document.querySelector('#animation-wrapper')
const animNameElement = document.querySelector('#animation-name')
const htmlElement = document.querySelector('#html-code')
const cssElement = document.querySelector('#css-code')


function showLoader(index) {
    const loader = loaders[index]
    animNameElement = loader.name
    setAnimationElement(loader)
    showLoaderCode(loader)
}

function setAnimationElement(loader) {
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
