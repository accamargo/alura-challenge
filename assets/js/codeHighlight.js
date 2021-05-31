(() => {

const codeWrapper = document.querySelector('.editor__codeWrapper')
const projectLanguage = document.querySelector(['[data-form="projectLanguage"]'])
const highlightButton = document.querySelector('[data-btn="highlight"]')
let codeInput =  codeWrapper.querySelector('code')

function changeLanguage() {
    codeWrapper.innerHTML = `<code id="codeEditorInput" class="editor__codeInput hljs ${projectLanguage.value} aria-label="editor" 
    spellcheck="false" contenteditable="true"> </code>`
    codeWrapper.firstChild.innerText = codeInput.innerText
}

codeWrapper.addEventListener('click', () => {
    codeInput.focus()
})

projectLanguage.addEventListener('change', changeLanguage)

highlightButton.addEventListener('click', () => {
    codeInput = codeWrapper.querySelector('code')
    hljs.highlightElement(codeInput)
})

})()