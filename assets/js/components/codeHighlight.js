const codeWrapper = document.querySelector('[data-editor="codeWrapper"]')
let codeInput =  codeWrapper.querySelector('code')


export function addHighlight() {
    codeInput = codeWrapper.querySelector('code')
    hljs.highlightElement(codeInput)
}

export function changeLanguage() {
    codeWrapper.innerHTML = `<code id="codeEditorInput" class="editor__codeInput hljs ${this.value} 
    data-editor="codeInput" aria-label="Editor" spellcheck="false" contenteditable="true"> </code>`
    codeWrapper.firstChild.innerText = codeInput.innerText
}

codeWrapper.addEventListener('click', () => {
    codeInput.focus()
})



