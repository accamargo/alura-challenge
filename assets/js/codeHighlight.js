const codeWrapper = document.querySelector('.editor__codeWrapper')
const projectLanguage = document.querySelector(['[data-form="projectLanguage"]'])
const highlightButton = document.querySelector('[data-btn="highlight"]')

function changeLanguage() {
    const codeInput = codeWrapper.querySelector('code')
    codeWrapper.innerHTML = `<code id="codeEditorInput" class="editor__codeInput hljs ${projectLanguage.value} aria-label="editor" 
    spellcheck="false" contenteditable="true"> </code>`
    codeWrapper.firstChild.innerText = codeInput.innerText
}

projectLanguage.addEventListener('change', changeLanguage)

highlightButton.addEventListener('click', () => {
    const codeInput = codeWrapper.querySelector('code')
    hljs.highlightBlock(codeInput)
})
